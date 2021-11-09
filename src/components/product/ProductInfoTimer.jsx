import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";
import classNames from "classnames";



export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
//   const renderer = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//       onTimeEnd;
//     } else {
//       return (
//         <span>
//           {hours}:{minutes}:{seconds}
//         </span>
//       );
//     }
//   };
 
  return (
    <div className={timeEnd ? classNames(styles["product-info-timer"],styles["active"]) : classNames(styles["product-info-timer"])}>
    <div className={styles["timer"]} >
    <label className={styles["title"]}>Ends in: {timeEnd}</label>
     {timeEnd && <Countdown onStop={onTimeEnd} date={timeEnd}/>}
      
    </div>
    </div>
  )
}
