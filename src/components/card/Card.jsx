import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import classNames from 'classnames';
import styles from"./Card.module.scss";
import { Card } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function CardComponent({
  name,
  likes = 1000,
  mediaUrl,
  user = { avatarUrl, verified },
  price,
  currency,
}) {
  return (
    <Card className={classNames(styles.card, styles.container)} sx={{ maxWidth: 345 }}>
          <Avatar
            url={user.avatarUrl}
            verified={user.verified}
          ></Avatar>
        {/* <img src={mediaUrl} className={classNames(styles.media)}></img> */}
        <CardMedia
        className={classNames(styles.media)}
        component="img"
        image={mediaUrl}
      />
      <CardContent>
        <Typography className={classNames(styles.title)} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography className={classNames(styles.price)} variant="body2" color="text.secondary">
          {price} {currency}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label={millify(likes)} variant="outlined" className={classNames(styles.likes)} ></Chip>
      </CardActions>
        {/* <Chip className={classNames(styles.likes)} label={millify(likes)} variant="outlined" /> */}
    </Card>
  );
}