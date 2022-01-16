import Card from "../card/Card";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import styles from"./Auctions.module.scss";
import Container from '@mui/material/Container';
import { useState } from "react";
import classNames from "classnames";
import Grid from '@mui/material/Grid';


export default function Auctions({cards = []}){

    
    const [period, setPeriod] = useState('');

    const handleChange = (event) => {
    setPeriod(event.target.value);
  }; 

    const mappedCards = cards.map((card,index) => <Card key={index} name={card.name} user={card.user} 
      mediaUrl={card.mediaUrl} price={card.price} currency={card.currency} timeLeft={card.timeLeft}/>)

    return (
        <Container className={classNames(styles.container)} maxWidth="xl"> 
        <div>
        <h3>Live auctions</h3>
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