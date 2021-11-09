import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";
import { display } from "@mui/system";


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
  const isNull = () => {
      const disValue;
      if(timeEnd){
          disValue = {display: "block"};
          return disValue;
      } else {
          disValue = {display: "none"};
          return disValue
      }
  }
 

  return (
    <div className={styles["product-info-timer"]}>
    <div className={styles["timer"]} >
    <label className={styles["title"]}>Ends in: {timeEnd}</label>
      <Countdown
        onComplete={onTimeEnd}
        style={isNull}
        date={Date.now() + onTimeEnd}
        // renderer={renderer}
      />
    </div>
    </div>
  )
}
