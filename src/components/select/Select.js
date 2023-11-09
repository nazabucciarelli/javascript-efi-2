import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import './Select.css';

export default function BasicSelect(props) {
  const handleChange = (event) => {
    props.setSizePage(event.target.value);
    props.setNumPage(1);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel className={props.darkMode ? 'darkModeSelect' : ''}>Tasks per page</InputLabel>
        <Select
          value={props.sizePage}
          label="Tasks per page"
          onChange={handleChange}
          className={props.darkMode ? 'darkModeSelect' : ''}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
