import styles from "./ProductActions.module.scss";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function ProductActions({isLive, currency, buyAmount, bidAmount, onBuy, onBid}){

    return (
        <div className={styles["product-action"]}>
        <Grid
        container
        spacing={0}
        display="flex"
        direction="row"
        >
          <Grid item xs={7} >
         <Button 
         style={{ height: "12px", paddingRight: "50px", paddingLeft: "50px"}}
         variant="contained"
         disabled={!isLive ? true : false}
         className={styles["button"]} 
         onClick={onBuy}
         >BUY FOR {buyAmount} {currency}</Button>
         </Grid>
         <Grid item xs={5} >
         <Button 
         style={{backgroundColor: "lightgray", height: "12px"}}   
         variant="outlined"
         disabled={isLive ? false : true}
         className={styles["button"]} 
         onClick={onBid}
         color="success"
         >PLACE BID FOR {bidAmount} {currency}</Button>
         </Grid>
         </Grid>
        </div>
    )
}