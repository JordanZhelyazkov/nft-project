import Card from "../card/Card";
import Select from "@mui/material";
import Grid from "@mui/material";
import Container from "@mui/material";
import classNames from "classnames";
import styles from"./Trending.module.scss";
import MenuItem from "@mui/material";


export default function Trending({cards = []}){

    return(
     <div >
         <h3>Trending</h3>
         <Select>
         <MenuItem value="This Week">This Week</MenuItem>
         <MenuItem value="Today">Today</MenuItem>
         </Select>
         <Grid 
        container
        // spacing={2}
        // rowGap='2rem'
      >
        <Grid item xs={2}>
        <Card name mediaUrl avatarUrl verified  price currency/>
        </Grid>
         {/* <Grid item>
        <Card name={cards} mediaUrl={cards} user= {{avatarUrl: {cards}}, {verified:{cards}}} price={cards} currency={cards}/>
            </Grid>
        <Grid item>
        <Card name={cards} mediaUrl={cards} user= {{avatarUrl: {cards}}, {verified:{cards}}} price={cards} currency={cards}/>
            </Grid>
        <Grid item>
        <Card name={cards} mediaUrl={cards} user= {{avatarUrl: {cards}}, {verified:{cards}}} price={cards} currency={cards}/>
            </Grid>  */}
      </Grid> 
     </div>
    )
}
// {
//     name: "Ivy",
//     user: {avatarUrl: './images/avatar.png', verified: true},
//     mediaUrl: './images/nft.jpg',
//     price: 1,
//     currency: 'ETH',
// }