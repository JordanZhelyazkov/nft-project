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
    <div className={timeEnd ? styles["product-info-timer active"] : styles["product-info-timer"]}>
    <div className={styles["timer"]} >
    <label className={styles["title"]}>Ends in: {timeEnd}</label>
      <Countdown
        onComplete={onTimeEnd}
        style={{display: timeEnd ? "block" : "none"}}
        date={Date.now() + onTimeEnd}
        renderer={renderer}
      />
    </div>
    </div>
  )
}
