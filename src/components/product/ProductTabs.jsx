import styles from "./ProductTabs.module.scss";
import TabContext from '@mui/lab/TabContext';
import TableRow from '@mui/material/TableRow';
import User from "../user/User";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import { formatDistance, parseISO, subDays  } from 'date-fns'






export default function ProductTabs({text, bids }){

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    let dateResult = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

    return(
    <div className={styles['product-tabs']}>
    <Box sx={{ typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1}}>
          <TabList onChange={handleChange} >
            <Tab label="Details" value="1" className={styles["tab-details"]}/>
            <Tab label="Bids" value="2" className={styles["tab-bids"]}/>
          </TabList>
        </Box>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">{bids.map((bid, index) =>  <TableRow className={`table-row-${index}`} ><User/>{bid}</TableRow>  )}</TabPanel>
      </TabContext>
    </Box>
    </div>
    )
}