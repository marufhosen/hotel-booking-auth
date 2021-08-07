import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [newUserIn, setNewUserIn] = useState(false);
  const [signUpUser, setSignUpUser] = useState({
    error: "",
    success: false,
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        const newUser = { ...signUpUser };
        newUser.error = errorMessage;
        newUser.success = false;
        setSignUpUser(newUser);
      });
  };

  const handleOnBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passHasNumber;
    }
    if (isFormValid) {
      const newUser = { ...signUpUser };
      newUser[e.target.name] = e.target.value;
      setSignUpUser(newUser);
    }
  };
  const handleSubmit = (e) => {
    if (newUserIn && signUpUser.email && signUpUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(signUpUser.email, signUpUser.password)
        .then((userCredential) => {
          const newUser = { ...signUpUser };
          newUser.error = "";
          newUser.success = true;
          setSignUpUser(newUser);
          updateUserName(signUpUser.name);
        })
        .catch((error) => {
          const newUser = { ...signUpUser };
          newUser.error = error.message;
          newUser.success = false;
          setSignUpUser(newUser);
        });
    }
    if (!newUserIn && signUpUser.email && signUpUser.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(signUpUser.email, signUpUser.password)
        .then((userCredential) => {
          // Signed in
          const newUser = { ...signUpUser };
          newUser.error = "";
          newUser.success = true;
          newUser.name = userCredential.user.displayName;
          setSignUpUser(newUser);
          setLoggedInUser(newUser);
          history.replace(from);
          // ...
        })
        .catch((error) => {
          const newUser = { ...signUpUser };
          newUser.error = error.message;
          newUser.success = false;
          setSignUpUser(newUser);
        });
    }
    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        // Update successful
        console.log("User Name Update Successfully");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleGoogleSignIn}
        >
          <EmailIcon style={{ marginRight: 10 }}></EmailIcon>
          Sign in with google
        </Button>
      </div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <p>Or</p>
        <input
          type="checkbox"
          name=""
          id=""
          onClick={() => setNewUserIn(!newUserIn)}
        />
        <label style={{ marginBottom: 100 }} htmlFor="">
          Sign up for new user
        </label>

        <form action="" onSubmit={handleSubmit}>
          {newUserIn && (
            <input
              onBlur={handleOnBlur}
              type="text"
              name="name"
              id=""
              placeholder="Name"
              required
            />
          )}
          <br />
          <input
            onBlur={handleOnBlur}
            type="text"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            onBlur={handleOnBlur}
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <br />
          <input type="submit" value={newUserIn ? "Sign Up" : "Sign In"} />
        </form>
        <p style={{ color: "red" }}>{signUpUser.error}</p>
        {signUpUser.success && (
          <p style={{ color: "green" }}>
            User {newUserIn ? "Created" : "Loged In"} Successfully{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
