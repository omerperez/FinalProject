import React, { useState, useEffect } from "react";
import "./Navigation.modules.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import UserProfile from "./UserProfile";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { makeStyles } from "@mui/styles";
import { menuItems, menuItemsManger } from "./menuItems";
import CreateMessageDialog from "../FormComponents/CreateMessageDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    width: "18%",
    background: "#363636 !important",
    boxShadow: "0px 0px 0px #00000017",
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#e2a021",
    background: "#363636",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#e2a021",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e2a021",
      background: 'white',
      height: "40px",
      margin: "auto",
    },
    "&:hover fieldset": {
      borderColor: "#e2a021",
      background: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e2a021",
      background: "white",
    },
  },
});

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const drawer = (
    <div style={{ marginTop: "5%" }}>
      <UserProfile />
      <Divider
        className="our-background h-4 mb-3"
        style={{ marginTop: "9%" }}
      />

      <List>
        {currentUser.role == "2"
          ? menuItemsManger.map((item, i) => {
              return (
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItem button disabled={item.isDisabled} key={item.title}>
                    <ListItemText
                      primary={item.title}
                      style={{ color: "white" }}
                      className={"menu-items"}
                    />
                    {item?.image ? (
                      <img src={item.image} className="nav-image" />
                    ) : null}
                  </ListItem>
                </Link>
              );
            })
          : null}
        {menuItems.map((item, i) => {
          return (
            <Link
              to={item.path}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <ListItem button disabled={item.isDisabled} key={item.title}>
                <ListItemText
                  primary={item.title}
                  style={{ color: "white" }}
                  className={"menu-items"}
                />
                {item?.image ? (
                  <img src={item.image} className="nav-image" />
                ) : null}
              </ListItem>
            </Link>
          );
        })}
        <div onClick={handleLogout}>
          <ListItem button disabled={false} key={"Log Out"}>
            <ListItemText
              primary={"Log Out"}
              style={{ color: "white" }}
              className={"menu-items"}
            />
          </ListItem>
        </div>
      </List>
      <ListItem className="footer-position blue-background footer-text-position footer-text-color footer-high">
        <div>Advertisement</div>
      </ListItem>
    </div>
  );

  return (
    <Drawer
      container={"Home Page"}
      variant="permanent"
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={true}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {drawer}
    </Drawer>
  );
}
