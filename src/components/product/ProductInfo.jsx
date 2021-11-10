import styles from "./ProductInfo.module.scss";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';



export default function ProductInfo({title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive}){

    return(
        <div className={styles["product-info"]}>
        <ProductInfoTitle text={title}/>
         <Stack className={styles["stats"]} direction="row" spacing={4}>
             <ProductInfoPrice amount={price} currency={currency}> </ProductInfoPrice>
             <ProductInfoLikes amount={likes}></ProductInfoLikes>
         </Stack>
         <Grid container 
         display="flex" 
         direction="row" 
         justifyContent="center"
         alignItems="center"
        //  grid-row="7/5" 
        >
             <Grid item style={{aspectRatio: "6/5"}}><ProductInfoCreator name={creator}  /></Grid>
             <Grid item style={{aspectRatio: "7/5"}}><ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/></Grid>
             </Grid>

         {isLive != null && <ProductInfoStatus></ProductInfoStatus>}
        </div>
    )
}