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
         style={{background: "#4E24F2", height: "12px", paddingRight: "50px", paddingLeft: "50px"}}
         variant="contained"
         disabled={!isLive ? true : false}
         className={styles["button"]} 
         onClick={onBuy}
         >BUY FOR {buyAmount} {currency}</Button>
         </Grid>
         <Grid item xs={5} >
         <Button 
         style={{background: "#24F25E;", height: "12px"}}   
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