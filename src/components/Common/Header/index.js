import React, { useState } from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
<<<<<<< HEAD

=======
// import { ThemeContext } from '@emotion/react';
>>>>>>> 4a29ccce899697a6570d9c7baa9e4dc9dd770611
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
  // switch  start
  const notify = () => toast("Theme Changed!");
  // set theme==dark,light to local storage
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  // every time need to toggle switch light to dark  to solve get theme from local storage
  const storedTheme = localStorage.getItem("theme");

  // const prefersDark =
  //   window.matchMedia &&
  //   window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark = storedTheme === "dark" || storedTheme === null;

  if (defaultDark) {
    setDark();
  }

  const [mode, setMode] = useState(defaultDark ? true : false);

  const toggleTheme = (e) => {
    if (!mode) {
      setDark();
    } else {
      setLight();
    }
    setMode(!mode);
   notify();
  };

  // switch end
  return (
    <div className="navbar">
      <Link to="/" style={{color: "var(--white)"}}>
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}> .</span>
      </h1>
      </Link>
      <div className="links">
        {/* switch buttn mui api */}
        <Switch
          checked={!mode}
          onClick={(e) => {
            toggleTheme();
          }}
        />
        
        {/* switch end */}
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">compare</p>
        </Link>
        <Link to="/wishlist">
          <p className="link">Wishlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} outlined={false} />
        </Link>
      </div>
      <div className="drawer-box">
        <TemporaryDrawer className="link" />
      </div>
    </div>
  );
}

export default Header;
