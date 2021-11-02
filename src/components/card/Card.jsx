import Chip from '@mui/material/Chip'
import Avatar from "../avatar/Avatar";
import MuiCard from '@mui/material/Card';
import millify from "millify";
import classNames from 'classnames';
import styles from"./Card.module.scss";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Countdown from 'react-countdown';
import { render } from 'react-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Card(props)
  // name,
  // likes = 0,
  // mediaUrl,
  // user = {avatarUrl, verified},
  // price,
  // currency,
 {
  const {name, likes=0, user: avatarUrl, user: verified, mediaUrl,  price, currency, timeLeft} = props;
  const timer = <div className="badge">
  <LiveTvIcon />
  <Countdown date={Date.now() + timeLeft} />
  </div>;
 
    
  return (
  <MuiCard container className={classNames(styles.card, styles.container, styles.badge)}>
    {/* <Card className={classNames(styles.card, styles.container)} sx={{ maxWidth: 345 }}> */}
    <CardHeader
    avatar={
      <Avatar
            url={avatarUrl}
            verified={verified}
          ></Avatar>
    }>
        </CardHeader>
        <CardMedia
        className={classNames(styles.media)}
        component="img"
        image={mediaUrl}
      > 
      {timeLeft ? timer : ""}
      </CardMedia>
      
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
