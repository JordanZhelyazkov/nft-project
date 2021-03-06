import Card from "../card/Card";
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import classNames from "classnames";
import styles from"./Trending.module.scss";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Item from '@mui/material/ListItemAvatar';
import { useState } from "react";



  




export default function Trending({cards=[]}){


    const [period, setPeriod] = useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };
  const mappedCards = cards.map(card => <Card name={card.name} avatarUrl={card.user.avatarUrl}
  verified={card.user.verified} mediaUrl={card.mediaUrl} price={card.price} currency={card.currency}/>)

    return(
     <Container >  
       <div>
     <h3>Trending</h3>
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
    </div>
    <div style={{width: '100%'}}>
    <Box >
    <Grid container  className="gridContainer" gap={2} alignItems="center">
      {mappedCards} 
      
  
</Grid>
</Box>
</div>
     </Container>
    )
}

