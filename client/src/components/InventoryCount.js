import React from 'react';
import { Typography } from '@mui/material';

const InventoryCount = ({ stats }) => {
  return (
    <div>
      <Typography variant="body1">
        NEW: {stats.new.count}
      </Typography>
      <Typography variant="body1">
        USED: {stats.used.count}
      </Typography>
      <Typography variant="body1">
        CPO: {stats.cpo.count}
      </Typography>
    </div>
  );
};

export default InventoryCount;