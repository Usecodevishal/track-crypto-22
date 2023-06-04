import React, { useState } from "react";
//import Box from '@mui/material/Box';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "./Grid";
import "./styles.css";
import List from "../List";
export default function TabsComponents({ coins, isWishlistPage }) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80ea",
      },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="grid" value="Grid" sx={style} />
          <Tab label="list" value="List" sx={style} />
        </TabList>

        <TabPanel value="Grid">
          <div className="grid-flex">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} delay={((i + 5) % 5) * 0.1} isWishlistPage={isWishlistPage} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <table className="list-container-table">
            {coins.map((coin, i) => {
              return <List coin={coin} key={i} delay={(i % 10) * 0.1} isWishlistPage={isWishlistPage} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
