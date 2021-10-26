import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import classNames from 'classnames';
import styles from"./Card.module.scss";
import { Card } from "@mui/material";
export default function CardComponent({
  name,
  likes = 1000,
  mediaUrl,
  user= { avatarUrl, verified },
  price,
  currency,
}) {
  return (
    <Card className={classNames(styles.card, styles.container)}>
          <Avatar
            url={user.avatarUrl}
            verified={user.verified}
          ></Avatar>
        <img src={mediaUrl} className={classNames(styles.media)}></img>
        <h3 className="title">{name}</h3>
        <p className={classNames(styles.price)}>{price} {currency}</p>
        <Chip  className={classNames(styles.likes)} label={millify(likes)} variant="outlined" />
    </Card>
  );
}