import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from "@mui/material/MenuItem";
import "./styles.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function SelectCoins({ crypto1,  handleCoinChange, crypto2 }) {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myData = await get100Coins();
    setAllCoins(myData);
  }

  return (
    <div className="flex-coins">
      <p>Crypto 1</p>
      <Select
        sx={style}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
          .filter((ele) => ele.id !== crypto2)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              {" "}
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        sx={style}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
          .filter((ele) => ele.id !== crypto1)
          .map((coin, i) => (
            <MenuItem key={i} value={coin.id}>
              
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
