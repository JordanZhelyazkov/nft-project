import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd, onTimeEnd}){
    if(timeEnd == null) {
        return (
            <div></div>
        )
    } else {
    return(
     <div className={styles["product-info-timer"]}>
       <div className={styles["timer"]}>
       <Countdown date={Date.now() + timeEnd} />
       </div>
     </div>
    )
    }
}