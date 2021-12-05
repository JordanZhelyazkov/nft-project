import  classNames  from "classnames";
import styles from "./ProfileCollection.module.scss";
import {Grid, Container, Typography } from "@mui/material";
import Card from "./../card/Card";
import ProfileCollectionFilters from "./ProfileCollectionFilters";

export default function ProfileCollection({user,filter,items}){
     
    const cards = items.map((card, i) => <Grid item  xs={3}><Card key={i} name={card.name} 
    likes={card.likes} verified={card.verified} mediaUrl={card.url} price={card.price}
    currency={card.currency} timeLeft={card.auction_end}
    /></Grid>)
    return(
      <div className={classNames(styles['profile-collection'])}>
        <Container>
       <Grid container>
           <Grid item xs={3}>
            <Typography variant="h3" >Collection</Typography>
           </Grid>
           <Grid item xs={9}>
            <ProfileCollectionFilters filter={filter}/>
           </Grid>
       </Grid>
       <Grid container>
       {cards}
       </Grid>
      </Container>
      </div>
    )
}