import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Avatar, Button } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBackground: {
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const classes = useStyles();
  const history = useHistory();
  const handleLoginBtn = () => {
    history.push("/login");
  };
  const handleLogOutBtn = () => {
    setLoggedInUser({});
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBackground}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hotel Gallary
          </Typography>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 15,
              marginRight: 10,
            }}
            to="/Home"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: 15,
              marginRight: 10,
            }}
            to="/book"
          >
            Booking
          </Link>
          {loggedInUser.success ? (
            <Button
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 14,
                marginRight: 10,
              }}
              onClick={handleLogOutBtn}
            >
              Log Out
            </Button>
          ) : (
            <Button
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 14,
                marginRight: 10,
              }}
              onClick={handleLoginBtn}
            >
              Log In
            </Button>
          )}
          <Typography style={{ marginRight: 10 }}>
            {loggedInUser.name}
          </Typography>
          <Avatar alt="User" src={loggedInUser.photo}></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
