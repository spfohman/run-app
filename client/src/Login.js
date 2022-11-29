import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
        } else {
          console.log(data);
          setLoginErrors(data.error);
          setUsername("");
          setPassword("");
        }
      });
  }
  const errorPs = loginErrors.map((e) => (
    <p key={e} className="errors">
      {e}
    </p>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
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

        {errorPs}
        <Button variant="outlined" type="submit" sx={{ margin: 1 }}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
