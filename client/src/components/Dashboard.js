import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from '../store/inventorySlice';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.inventory);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Summary stats at the top
  const summaryStats = [
    { label: "Total Sales", value: "$15,052.44" },
    { label: "Units", value: "57" },
    { label: "Total Value", value: "$1,925.6K" },
    { label: "Average", value: "$20,587" },
    { label: "YTD", value: "$27.5M" }
  ];

  // Transform data for charts
  const monthlyData = [
    { month: 'Jan', value: 150 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 180 },
    { month: 'Apr', value: 160 },
    { month: 'May', value: 140 },
    { month: 'Jun', value: 120 },
    { month: 'Jul', value: 100 },
    { month: 'Aug', value: 90 },
    { month: 'Sep', value: 85 },
    { month: 'Oct', value: 80 },
    { month: 'Nov', value: 75 },
    { month: 'Dec', value: 70 }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Typography variant="h5" sx={{ mb: 3 }}>
          Inventory Dashboard (Admin Dashboard)
        </Typography>

        {/* Summary Stats */}
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {summaryStats.map((stat, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6">{stat.value}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Charts */}
        <Grid container spacing={3}>
          {/* First Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Monthly Inventory Trends</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff9800" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>Average Price Trends</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#ff9800" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Filter Drawer */}
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            marginTop: '64px', // Adjust based on your app bar height
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">Filter Data By</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Status" />
            <FormControlLabel control={<Checkbox />} label="Region" />
            <FormControlLabel control={<Checkbox />} label="Model" />
            <FormControlLabel control={<Checkbox />} label="Category" />
            <FormControlLabel control={<Checkbox />} label="Dealership" />
          </FormGroup>
          <Button 
            variant="contained" 
            fullWidth 
            sx={{ mt: 2, bgcolor: '#ff9800' }}
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Dashboard;