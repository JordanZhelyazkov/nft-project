import styles from "./ProductTabs.module.scss";
import TabContext from '@mui/lab/TabContext';
import TableRow from '@mui/material/TableRow';
import User from "../user/User";
import AppBar from '@mui/material/AppBar';


// import Box from '@mui/material/Box';


export default function ProductTabs({text, bids }){

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    let dateResult = formatDistance(parseISO(new Date()));
    const mappedRows = bids.map((bid) =>  <TableRow className={`table-row-${bid.i}`}><User />{dateResult}</TableRow>)

    return(
    <div className={styles['product-tabs']}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} >
        <AppBar position="static">
            <Tab label="Details" value="1" />
            <Tab label="Bids" value="2" />
        </AppBar>
        </TabList>
        </Box>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">
        {mappedRows}
        </TabPanel>
        </TabContext>  
    </div>
    )
}