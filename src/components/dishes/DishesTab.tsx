import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import TabPanel from '../TabPanel';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import FetchDishes from '../../hooks/FetchDishes';
import HotDishes from '../choose/HotDishes';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 'bold',
    fontSize: '3.5rem',
    color: '#fff',

    // "& .MuiTabs-indicator": {
    //   display: "flex",
    //   justifyContent: "flex-start",
    //   backgroundColor: "transparent",
    //   "& > span": {
    //     maxWidth: 10,
    //     width: "100%",
    //     backgroundColor: "white"
    //   }
    // }
  },
}));
export default function DishesTab() {
  // axios get Exchange Rates fron endpoint
  // const [exchangeRates, setExchangeRates] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios(
  //         'https://api.exchangeratesapi.io/latest?base=USD'
  //       );
  //       setExchangeRates(result.data.rates);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       setErrorMessage(error.message);
  //     }
  //   };

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
    <div className='py-10'>
    

      <Box sx={{ width: '100%' }}>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
        <Tabs
          value={value}
          onChange={handleChange}
          // textColor='white'
          aria-label='basic tabs example'
          className={classes.root}
          centered={false}
          TabIndicatorProps={{ children: <span /> }}
        >
          <Tab
            label='Hot Dishes'
            {...a11yProps(0)}
            className='font-bold text-white'
          />
          <Tab
            label='Cold Dsihes'
            {...a11yProps(1)}
            className='font-bold text-white'
          />
          <Tab
            label='Soup'
            {...a11yProps(2)}
            className='font-bold text-white'
          />
          <Tab
            label='Grill'
            {...a11yProps(3)}
            className='font-bold text-white'
          />
          <Tab
            label='Appetizer'
            {...a11yProps(4)}
            className='font-bold text-white'
          />
          <Tab
            label='Dessert'
            {...a11yProps(5)}
            className='font-bold text-white'
          />
        </Tabs>
      </Box>

      <div className='Choose-Dishes flex justify-between py-10'>
        <h2 className='text-xl'>Choose Dishes</h2>

        <select className='bg-secondary outline-hidden outline-none rounded-md focus:outline-none'>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
        </select>
      </div>

      <TabPanel value={value} index={0}>
        <HotDishes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <FetchDishes dishes={'cold dishes'} />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <FetchDishes dishes={'Soup'} />

      </TabPanel>

      <TabPanel value={value} index={3}>
      <FetchDishes dishes={'Grill'} />

      </TabPanel>

      <TabPanel value={value} index={4}>
      <FetchDishes dishes={'Appetizer'} />

      </TabPanel>

      <TabPanel value={value} index={5}>
      <FetchDishes dishes={'dessert'} />

      </TabPanel>
      {/* </Box> */}
    </div>
  );
}
