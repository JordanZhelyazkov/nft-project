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
         <Stack className={styles["stats"]} direction="row" spacing={4}>
             <ProductInfoPrice amount={price} currency={currency}> </ProductInfoPrice>
             <ProductInfoLikes amount={likes}></ProductInfoLikes>
         </Stack>
         <Grid container 
         display="flex" 
         direction="row" 
         justifyContent="center"
         alignItems="center"
         grid-row="7/5" >
             <Grid item><ProductInfoCreator name={title} avatar={creator} /></Grid>
             <Grid item><ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/></Grid>
             </Grid>

         {isLive && <ProductInfoStatus></ProductInfoStatus>}
        </div>
    )
}