import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import "./Card.module.scss";


export default function Card({
  name,
  likes = 0,
  mediaUrl,
  avatarUrl,
  verified,
  price,
  currency,
}) {
  return (
    <div className="card" style={{backgroundColor: "#181828", width: "310px"}}>
        <Avatar url={avatarUrl} verified="true"/>
        <img style={{borderRadius: "30px", backgroundColor: 'black'}} src={mediaUrl} className="media"/>
        <h3 className='title'>{name}</h3>
        <p className='price'>{price} {currency}</p>
        <button  className="likes" style={{position: "relative"}}>
          <Chip label={millify(likes)}>{millify(likes)}</Chip>
        </button>
    </div>
  );
}
