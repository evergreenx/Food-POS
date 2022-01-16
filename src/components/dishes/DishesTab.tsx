import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import TabPanel from '../TabPanel';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({

  root: {
    fontWeight: 'bold',
    fontSize: '3.5rem',

  
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 10,
      width: "100%",
      backgroundColor: "white"
    }
  }
}
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
            // textColor='white'
            aria-label='basic tabs example'
            className={classes.root}
            centered={false}
            TabIndicatorProps={{ children: <span /> }}
          >
            <Tab label='Item One' {...a11yProps(0)} />
            <Tab label='Item Two' {...a11yProps(1)} />
            <Tab label='Item Three' {...a11yProps(2)} />
          </Tabs>
        </Box>

        <div>select dishes here</div>

        <TabPanel value={value} index={0} >
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
