import { useState} from 'react';

import './styles.css'
import MenuItem from '@mui/material/MenuItem';

import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectDays({days, handleDaysChange, noPtag}) {
  

  return (
    <div className="select-days" >
      {!noPtag && <p>Select days In</p>}
        
        <Select
        sx={{
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
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}> 30 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
        </Select>
      
    </div>
  );
}