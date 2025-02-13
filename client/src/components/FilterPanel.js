import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMake, setDuration } from '../store/filterSlice';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const { make, duration } = useSelector((state) => state.filters);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Vehicle Make</InputLabel>
          <Select
            value={make}
            onChange={(e) => dispatch(setMake(e.target.value))}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Mercedes">Mercedes</MenuItem>
            <MenuItem value="Lexus">Lexus</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Duration</InputLabel>
          <Select
            value={duration}
            onChange={(e) => dispatch(setDuration(e.target.value))}
          >
            <MenuItem value="lastMonth">Last Month</MenuItem>
            <MenuItem value="thisMonth">This Month</MenuItem>
            <MenuItem value="last3Months">Last 3 Months</MenuItem>
            <MenuItem value="last6Months">Last 6 Months</MenuItem>
            <MenuItem value="thisYear">This Year</MenuItem>
            <MenuItem value="lastYear">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterPanel;