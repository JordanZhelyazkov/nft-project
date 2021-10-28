import Card from "../card/Card";
import Select from "@mui/material";
import Grid from "@mui/material";
import Container from "@mui/material";
import classNames from "classnames";
import styles from"./Trending.module.scss";
import MenuItem from "@mui/material";
import Avatar from "../avatar/Avatar";
import { useState } from "react";


export default function Trending(...props){

    const [period, setPeriod] = useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

    return(
     <div >
         <Container>
         <h3>Trending</h3>
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
        <Card name={props[0].name} mediaUrl={props[0].mediaUrl} user={props[0].avatarUrl, props[0].verified}  price={props[0].price} currency={props[0].currency}/>
        </Grid>
         <Grid item>
        <Card name={props[1].name} mediaUrl={props[1].mediaUrl} user={props[1].avatarUrl, props[1].verified}  price={props[1].price} currency={props[1].currency}/>
            </Grid>
        <Grid item>
        <Card name={props[2].name} mediaUrl={props[2].mediaUrl} user={props[2].avatarUrl, props[2].verified}  price={props[2].price} currency={props[2].currency}/>
            </Grid>
        <Grid item>
        <Card name={props[3].name} mediaUrl={props[3].mediaUrl} user={props[3].avatarUrl, props[3].verified}  price={props[3].price} currency={props[3].currency}/>
            </Grid> 
      </Grid> 
      </Container>
     </div>
    )
}
