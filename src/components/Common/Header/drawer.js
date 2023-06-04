import { useState } from 'react';
//import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';
import { Switch } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
//import MailIcon from '@mui/icons-material/Mail';
import { ToastContainer, toast } from 'react-toastify';
import "./styles.css";
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);


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
  
  
   
  

  return (
    <div className="drawer-container">
      
        
          <IconButton onClick={()=>setOpen(true)} className="Menu-icon-box">
            <MenuRoundedIcon className="link"/>
          </IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className="drawer-div">
            <Link to="/"><p className="link">Home</p></Link>
                <Link to="/compare"><p className="link">Comapre</p></Link>
                <Link to="/wishlist"><p className="link">Watchlist</p></Link>
                <Link to="/dashboard"><p className="link">Dashboard</p></Link>
                {/* switch buttn mui api */}
        <Switch
          checked={!mode}
          onClick={(e) => {
            toggleTheme();
          }}
        />
        <ToastContainer />
        {/* switch end */}
            </div>
          </Drawer>
        
      
    </div>
  );
}