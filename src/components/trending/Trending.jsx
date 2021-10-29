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



export default function Trending(cards=[]){


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
         <Grid 
        container
        // spacing={2}
        // rowGap='2rem'
      >
        <Grid item xs={2}>
        <Card name={cards[0].name} mediaUrl={cards[0].mediaUrl} user={cards[0].avatarUrl, cards[0].verified}  price={cards[0].price} currency={cards[0].currency}/>
        </Grid>
         <Grid item>
        <Card name={cards[1].name} mediaUrl={cards[1].mediaUrl} user={cards[1].avatarUrl, cards[1].verified}  price={cards[1].price} currency={cards[1].currency}/>
            </Grid>
        <Grid item>
        <Card name={cards[2].name} mediaUrl={cards[2].mediaUrl} user={cards[2].avatarUrl, cards[2].verified}  price={cards[2].price} currency={cards[2].currency}/>
            </Grid>
        <Grid item>
        <Card name={cards[3].name} mediaUrl={cards[3].mediaUrl} user={cards[3].avatarUrl, cards[3].verified}  price={cards[3].price} currency={cards[3].currency}/>
            </Grid> 
      </Grid> 
      </Container>
     </div>
    )
}
