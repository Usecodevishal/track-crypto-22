import React, { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css'
export default function TogglePriceType({priceType, handlePriceTypeChange}) {
  

  return (
    <ToggleButtonGroup
      className="toggle-prices"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .Mui-selected, &.Mui-selected:hover": {
          color: "#3a80e9 !important",
          backgroundColor: "#3a80e9",
        },
        borderColor: "#3a80e9",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "#3a80e9",
        },
        "& .MuiToggleButton-standard": {
          color: "#3a80e9",
        },
      }}
    >
      <ToggleButton value="prices" aria-label="left aligned" className="toggle-btn" >Prices</ToggleButton>
      <ToggleButton value="market_caps" aria-label="centered" className="toggle-btn">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" aria-label="right aligned" className="toggle-btn">Total Volume</ToggleButton>
      
    </ToggleButtonGroup>
  );
}