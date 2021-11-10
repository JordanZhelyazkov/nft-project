import styles from "./ProductInfo.module.scss";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={styles["product-info"]}>
      <h1>
        <ProductInfoTitle text={title}></ProductInfoTitle>
      </h1>
      <Stack className={styles["stats"]} direction="row" spacing={4}>
        <ProductInfoPrice amount={price} currency={currency}>
          {" "}
        </ProductInfoPrice>
        <ProductInfoLikes amount={likes}></ProductInfoLikes>
      </Stack>
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        //  style={{aspectRatio: "7/5"}}
      >
        <Grid item style={{width:"200px", height: "200px" ,aspectRatio: "6/5"}}>
          <ProductInfoCreator
            name={creator.name}
            avatar={creator.avatar}
          ></ProductInfoCreator>
        </Grid>
        <Grid item style={{width:"200px", height: "200px" ,aspectRatio: "7/5"}}>
          <ProductInfoTimer
            timeEnd={timeEnd}
            onTimeEnd={onTimeEnd}
          ></ProductInfoTimer>
        </Grid>
      </Grid>

      {isLive && (
        <p>
          <ProductInfoStatus></ProductInfoStatus>
        </p>
      )}
    </div>
  );
}
