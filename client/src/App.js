import './components/Navigation/Navigation.modules.css' ;
import { BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import Signup from './components/authComponents/Signup';
import { Container } from "react-bootstrap";
import AuthProvider from '../src/contexts/AuthContext'
import Login from './components/authComponents/Login';
import PrivateRoute from './components/Layout/PrivateRoute';
import ForgotPassword from './components/authComponents/ForgotPassword';
import UpdateProfile from './components/authComponents/UpdateProfile';
import AuthLayout from './components/Layout/AuthLayout';
import ManageAdvertisementPage from "./components/Pages/ManageAdvertisementPage";
import UsersInformation from './components/Pages/UsersInformation';
import MessageScreen from './components/MessageComponents/MessageScreen';
import CreateAdvertisementPage from "./components/Pages/CreateAdvertisementPage";
import EditAdvertisementPage from './components/Pages/EditAdvertisementPage';

const maxWidthCard = { maxWidth: 400 };
const minHeightContainer = { minHeight: "100vh" };

function App() {

  return (
    <Container>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="homepage"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="screen-1"
              element={
                <PrivateRoute>
                  <MessageScreen number={1} />{" "}
                </PrivateRoute>
              }
            />
            <Route
              path="screen-2"
              element={
                <PrivateRoute>
                  <MessageScreen number={2} />
                </PrivateRoute>
              }
            />
            <Route
              path="screen-3"
              element={
                <PrivateRoute>
                  <MessageScreen number={3} />
                </PrivateRoute>
              }
            />
            <Route
              path="new-advertisement"
              element={
                <PrivateRoute>
                  <CreateAdvertisementPage />
                </PrivateRoute>
              }
            />
            <Route
              path="manager-edit"
              element={
                <PrivateRoute>
                  <ManageAdvertisementPage />
                </PrivateRoute>
              }
            />
            <Route
              path="manager-edit/message/:id"
              element={
                <PrivateRoute>
                  <EditAdvertisementPage />
                </PrivateRoute>
              }
            />
            <Route
              path="all-users"
              element={
                <PrivateRoute>
                  <UsersInformation />
                </PrivateRoute>
              }
            />
            <Route
              path="update-profile"
              element={
                <PrivateRoute>
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={minHeightContainer}
                  >
                    <div className="w-100" style={maxWidthCard}>
                      <UpdateProfile />
                    </div>
                  </div>
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthLayout>
                  <Signup />
                </AuthLayout>
              }
            />
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <AuthLayout>
                  <ForgotPassword />
                </AuthLayout>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
