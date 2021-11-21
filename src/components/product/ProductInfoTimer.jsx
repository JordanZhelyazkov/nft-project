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
    <h3 className={styles["title"]}>Ends in: </h3>
    <div className={styles["timer"]} >
     {timeEnd && <Countdown onStop={onTimeEnd} date={timeEnd}></Countdown>}
     
    </div>
    </div>
  )
}
