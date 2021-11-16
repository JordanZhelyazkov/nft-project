import styles from "./ProductTabs.module.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import Grid from '@mui/material/Grid';


export default function ProductContainer({name, owner, price, currency,
likes, auction_end, details, bids, source}){

    return (
        <div className={styles['product-container']}>
        <Grid 
        container
        display="flex" >
        <Grid item xs={6}>
        <ProductImage />
        </Grid>
        <Grid itemxs={5}>
        <ProductInfo 
        title={name} 
        creator={owner} 
        price={price} 
        currency={currency} 
        likes={likes} 
        timeEnd={auction_end}/>
        <ProductTabs 
        text={details} 
        bids={bids}/>
        <ProductActions {...source}/>
        </Grid>
        </Grid>
        </div>
    )
}