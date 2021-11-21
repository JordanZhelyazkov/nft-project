import styles from "./ProductInfoTitle.module.scss";
import Typography from '@mui/material/Typography';


export default function ProductInfoTitle({text}){

    return (
        <div className={styles["product-info-title"]}>
        <Typography variant="h2" component="h2" className={styles["title"]}>
          {text}
        </Typography>

        </div>
    )
}