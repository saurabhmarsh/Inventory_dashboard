const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { parse } = require('csv-parse');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper function to parse CSV data
const parseCSV = async (filePath) => {
  const records = [];
  const parser = fs
    .createReadStream(filePath)
    .pipe(parse({ columns: true, trim: true }));

  for await (const record of parser) {
    records.push({
      ...record,
      msrp: parseFloat(record.msrp),
      date: new Date(record.date),
    });
  }
  return records;
};

// API endpoint to get inventory data with filters
app.get('/api/inventory', async (req, res) => {
  try {
    const { make, duration } = req.query;
    const data = await parseCSV(path.join(__dirname, '../data/sample-data.csv'));
    
    let filteredData = [...data];
    
    // Apply make filter
    if (make) {
      filteredData = filteredData.filter(item => item.make.toLowerCase() === make.toLowerCase());
    }
    
    // Apply duration filter
    if (duration) {
      const now = new Date();
      const filterDate = new Date();
      
      switch(duration) {
        case 'lastMonth':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'thisMonth':
          filterDate.setDate(1);
          break;
        case 'last3Months':
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case 'last6Months':
          filterDate.setMonth(now.getMonth() - 6);
          break;
        case 'thisYear':
          filterDate.setFullYear(now.getFullYear(), 0, 1);
          break;
        case 'lastYear':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filteredData = filteredData.filter(item => new Date(item.date) >= filterDate);
    }

    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});