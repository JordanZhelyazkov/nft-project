import styles from "./ProductAuctions.module.scss";
import Button from '@mui/material/Button';

export default function ProductAuctions({isLive, currency, buyAmount, bidAmount, onBuy, onBid}){

    return(
        <div className={styles["product-auctions"]}>
         <Button 
         style={{backgroundColor: "#0C0C14",color: "#E1E1FC", height: "12px"}}
         variant="outlined"
         disabled={!isLive}
         xs={7} 
         className={styles["button"]} 
         onClick={onBuy}
         
         >BUY FOR {buyAmount} {currency}</Button>
         <Button xs={5} 
         style={{background: "#0C0C14", color: "#E1E1FC", height: "12px"}}   
         variant="outlined"
         disabled={isLive}
         className={styles["button"]} 
         onClick={onBid}
         >PLACE BID FOR {bidAmount} {currency}</Button>
        </div>
    )
}