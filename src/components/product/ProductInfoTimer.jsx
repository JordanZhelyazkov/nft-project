import styles from "./ProductInfoTimer.module.scss";
import Countdown from 'react-countdown';

export default function ProductInfoTimer({timeEnd, onTimeEnd}){
    const renderer = ({hours, minutes, seconds, completed}) => {
    if(completed){
        return(
        onTimeEnd
        )
    } else {
        return (
        <span>
        {hours}:{minutes}:{seconds}
      </span>
        )
    }
}

 const returnFunc = () => {
     if(timeEnd === null) {
         return (
             <div></div>
         )
     } else {
         return (
       <div className={styles["product-info-timer"]}>
       <div className={styles["timer"]}>
       <Countdown date={Date.now() + onTimeEnd} renderer={renderer} />
       <label className={styles["title"]}>Ends in: {timeEnd}</label>
       </div>
     </div>
         )
     }
 }
    
    return(
        {returnFunc}
    )
    
}