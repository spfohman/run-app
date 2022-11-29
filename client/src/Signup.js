import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
        } else {
          console.log(data);
          setSignupErrors(data.error);
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
        }
      });
  }
  const errorPs = signupErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <TextField
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          sx={{ margin: 1 }}
        />
        <br></br>
        <TextField
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{ margin: 1 }}
        />
        <br></br>
        <TextField
          type="password"
          name="password"
          value={passwordConfirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          sx={{ margin: 1 }}
        />
        <br></br>

        {errorPs}
        <Button sx={{ margin: 1 }} variant="outlined" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
export default Signup;
