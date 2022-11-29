import "./App.css";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Login from "./Login";
import Signup from "./Signup";
import UserHome from "./UserHome";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f3e46",
      light: "#52796f",
      dark: "#354f52",
    },
    secondary: {
      main: "#84a98c",
      light: "#cad2c5",
    },
  },
});
function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
        setLoggedIn(true);
      } else {
        response.json().then((data) => setErrors(data.errors));
      }
    });
  }, []);

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          {user ? (
            <UserHome user={user} logout={logout} />
          ) : (
            <div className="landingPage">
              <h1>Run Data Tracker</h1>
              <h4>
                Welcome! You can use this app to track your run progress. Enter
                data for each workout you do, then find your results!
              </h4>
              <img
                className="landingPhoto"
                alt="photo of a runner"
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJ1bm5pbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
              <Login setUser={setUser} />
              <Signup setUser={setUser} />
            </div>
          )}
        </div>
        <hr></hr>

        <footer style={{ textAlign: "center" }}>
          <p className="footerText">
            Questions about the app?
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="mailto:pfohman.sarah@gmail.com"
            >
              <MailOutlineIcon className="footerIcon" />
            </a>
          </p>

          <br />
          <p className="footerText">
            Check out other projects:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/spfohman"
            >
              <GitHubIcon className="footerIcon" />
            </a>
          </p>

          <br />
          <p className="footerText">
            Connect:{" "}
            <a
              className="bloglinks"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
            >
              <LinkedIn className="footerIcon" />
            </a>
          </p>
        </footer>
      </>
    </ThemeProvider>
  );
}
export default App;
