import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";
import { display } from "@mui/material/node_modules/@mui/system";



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
      {timeEnd && <Countdown 
        onComplete={onTimeEnd}
        date={Date.now() + onTimeEnd}
      />}
    </div>
    </div>
  )
}
