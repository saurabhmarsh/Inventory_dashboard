import React from 'react';
import { Typography } from '@mui/material';

const AverageMSRP = ({ stats }) => {
  const calculateAverage = (category) => {
    if (stats[category].count === 0) return 0;
    return (stats[category].totalMSRP / stats[category].count).toFixed(2);
  };

  return (
    <div>
      <Typography variant="body1">
        NEW: ${calculateAverage('new')}
      </Typography>
      <Typography variant="body1">
        USED: ${calculateAverage('used')}
      </Typography>
      <Typography variant="body1">
        CPO: ${calculateAverage('cpo')}
      </Typography>
    </div>
  );
};

export default AverageMSRP;