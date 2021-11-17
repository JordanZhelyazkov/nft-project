import styles from "./ProductContainer.module.scss";
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
        <ProductImage url="../public/images/nft.jpg"/>
        </Grid>
        <Grid itemxs={5}>
        <ProductInfo 
        title={name} 
        creator={owner} 
        price={price} 
        currency={currency} 
        likes={likes} 
        timeEnd={auction_end.timeEnd}/>
        onTimeEnd={auction_end.onTimeEnd}
        <ProductTabs 
        text={details} 
        bids={bids}/>
        <ProductActions 
        isLive={true}
        currency={source.currency}
        buyAmount={source.buyAmount}
        bidAmount={source.bidAmount}
        onBuy={source.onBuy}
        onBid={source.onBid}
        />
        </Grid>
        </Grid>
        </div>
    )
}