import Card from "../card/Card";
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import classNames from "classnames";
import styles from"./Trending.module.scss";
import MenuItem from '@mui/material/MenuItem';
import Avatar from "../avatar/Avatar";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Item from '@mui/material/ListItemAvatar';
import { useState } from "react";


export default function Trending(cards = []){

    const [period, setPeriod] = useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

    return(
     <Container >  
     <h3>Trending</h3>
       <Box className="select" sx={{ minWidth: 120, maxWidth: 150, float: "right"}}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
    </Box>
    <div>
    <Grid container spacing={2}>
      <Grid item xs={2}><Item><Card cards={cards[0]} /></Item></Grid>
      <Grid item xs={2}><Item><Card cards={cards[1]} /></Item></Grid>
      <Grid item xs={2}><Item><Card cards={cards[2]} /></Item></Grid>
      <Grid item xs={2}><Item><Card cards={cards[3]} /></Item></Grid>
</Grid>
</div>
     </Container>
    )
}

