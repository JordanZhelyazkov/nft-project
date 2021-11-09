import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";



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
    <div className={styles["product-info-timer"]}>
    <div className={styles["timer"]} >
    <label className={styles["title"]}>Ends in: {timeEnd}</label>
    {!timeLeft ? "" : 
      <Countdown
        onComplete={onTimeEnd}
        date={Date.now() + onTimeEnd}
      />}
    </div>
    </div>
  )
}
