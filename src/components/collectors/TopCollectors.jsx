import CollectorColumn from "./CollectorColumn";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import _ from 'lodash';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import Grid from '@mui/material/Grid';

export default function TopCollectors({collectors}){
    
    const [period, setPeriod] = useState('');

    const handleChange = (event) => {
    setPeriod(event.target.value);
  }; 
    
    collectors.map((collector, index) => collector.id=index);
    const chunked = _.chunk(collectors, 3);
    
    const mappedColl = chunked.map((chunk, index) =>  <CollectorColumn key={index} items={chunk}/> )
    
    
    
    return(
        <div className={classNames(styles.wrapper)}>
            
            <h3>Top Collectors</h3>
        <Box className="select" sx={{ minWidth: 120, maxWidth: 150, float: "right"}}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            id="select"
            value={period}
            label="Period"
            onChange={handleChange}>
          <MenuItem value="This Month">This Month</MenuItem>
          <MenuItem value="This Week">This Week</MenuItem>
          <MenuItem value="Today">Today</MenuItem>
          </Select> 
          </FormControl>
     </Box >
     <Grid container  className="gridContainer" gap={2} alignItems="center">
     {mappedColl}   
     </Grid> 
     
        </div>
    )
}