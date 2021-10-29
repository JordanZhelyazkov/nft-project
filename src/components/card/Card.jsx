import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import MuiCard from '@mui/material/Card';
import millify from "millify";
import classNames from 'classnames';
import styles from"./Card.module.scss";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  user = {avatarUrl, verified},
  price,
  currency,
}) {
  return (
  <MuiCard container className={classNames(styles.card, styles.container)}>
    {/* <Card className={classNames(styles.card, styles.container)} sx={{ maxWidth: 345 }}> */}
    <CardHeader
    avatar={
      <Avatar
            url={user.avatarUrl}
            verified={user.verified}
          ></Avatar>
    }>
        </CardHeader>
        <CardMedia
        className={classNames(styles.media)}
        component="img"
        image={mediaUrl}
      />
      <CardContent>
        <Typography  className={classNames(styles.title)} gutterBottom variant="h5" component="h5">
          {name}
        </Typography>
        <Typography className={classNames(styles.price)} variant="p" >~{price} {currency}</Typography>
      </CardContent>
      <CardActions>
        <Chip label={millify(likes)} variant="outlined" className={classNames(styles.likes)} ></Chip>
      </CardActions>
    </MuiCard>
  );
}
