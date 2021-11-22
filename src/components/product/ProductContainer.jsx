import styles from "./ProductContainer.module.scss";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import  Grid  from '@mui/material/Grid';
// import { useEffect } from "react";


export default function ProductContainer({name, owner, price, currency,
likes, auction_end, details, bids, source}){

   

    return (
        <div className={styles['product-container']}>
        <Grid 
        container
        display="flex"
        direction="row" >
        <Grid item xs={6}>
        <ProductImage url={source?.url}/>
        </Grid>
        <Grid item xs={5}>
        <ProductInfo 
        title={name} 
        creator={owner} 
        price={price} 
        currency={currency} 
        likes={likes} 
        timeEnd={auction_end}
        />
        

        <ProductTabs 
        text={details} 
        bids={bids || []}
        />
     
        <ProductActions 
        />
        </Grid>
        </Grid>
        </div>
    )
}
// bids={[
        //     {
        //       user: {
        //         info: 20,
        //         name: "John",
        //         verified: true,
        //         avatar:
        //           "https://nft-auction.herokuapp.com/uploads/thumbnail_0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg",
        //       },
        //       date: "2021-10-22T08:29:23.382Z",
        //       amount: 20,
        //     },
        //     {
        //       user: {
        //         info: 20,
        //         name: "John",
        //         verified: true,
        //         avatar:
        //           "https://nft-auction.herokuapp.com/uploads/thumbnail_0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg",
        //       },
        //       date: "2021-10-22T08:29:23.382Z",
        //       amount: 20,
        //     },
        //   ]}