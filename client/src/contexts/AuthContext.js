import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../AuthFirebase/firebase';
import Cookies from "universal-cookie";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080" });
const AuthContext = React.createContext(); 

export function useAuth(){ 
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();

  function signup(firstName, lastName, email, password, image) {
    const userData = new FormData();
    userData.append("firstName", firstName);
    userData.append("lastName", lastName);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("image", image);
    userData.append("role", "1");

    return api
      .post("/register", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function login(email, password) {
    const user = {
      email: email,
      password: password,
    };
    return api
      .post("/login", user)
      .then(function (response) {
        cookies.set("auth-token", response.data.token);
        cookies.set("connectUser", response.data.user);
        setCurrentUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function logout() {
    setCurrentUser(null);
    cookies.remove("auth-token");
    return cookies.remove("connectUser");
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function loginWithPhone(phoneNumber, appVerifier) {
    return auth.signInWithPhoneNumber(+972522520484, appVerifier);
  }

  function createMessage(
    messageName,
    template,
    title,
    textFields,
    visableTimeInSeconds,
    dateToStart,
    dateToEnd,
    days,
    screenNumber
  ) {

    var daysToShow = [];
    days.map((day) => {
      day == "Sunday"
        ? daysToShow.push(1)
        : day == "Monday"
        ? daysToShow.push(2)
        : day == "Tuesday"
        ? daysToShow.push(3)
        : day == "Wednesday"
        ? daysToShow.push(4)
        : day == "Thursday"
        ? daysToShow.push(5)
        : day == "Friday"
        ? daysToShow.push(6)
        : daysToShow.push(7)
    }); 

    const data = {
      messageName: messageName,
      templateSrc:
        template == "Template 1" ? 1 : template == "Template 2" ? 2 : 3,
      title: title,
      textFields: textFields,
      visableFor: visableTimeInSeconds,
      images: [],
      dateAndTimeToStartFrame: dateToStart,
      dateAndTimeToEndFrame: dateToEnd,
      daysToshow: daysToShow,
      screens: screenNumber,
    };

    console.log(data);

    return api
      .post("/message/create", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (cookies.get("connectUser")) {
      setCurrentUser(cookies.get("connectUser"));
    }
    return setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    createMessage,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
