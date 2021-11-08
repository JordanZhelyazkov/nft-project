import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";
import Chip from '@mui/material/Chip';

export default function ProductInfoLikes({amount=0}){

    return (
        <div className={styles["product-info-likes"]}>
         <Chip variant="outlined" className={styles["likes"]}>{millify(amount)}</Chip>
        </div>
    )
}