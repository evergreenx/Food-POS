import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

// import TabPanel from '../TabPanel';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70,
    '& .MuiSlider-thumb': {
      backgroundColor: '#f0eded',
      height: 20,
      width: 20,
      borderRadius: '20%',
    },

    '& .MuiSlider-track': {
      height: 7,
    },
  },


}));
export default function DishesTab() {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='white'
            aria-label='basic tabs example'
            className='text-white'
          >
            <Tab label='Item One' {...a11yProps(0)} />
            <Tab label='Item Two' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} className='text-white'>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
