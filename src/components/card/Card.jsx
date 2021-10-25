import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import "./Card.module.scss";
import User from "../user/User";

export default function Card({
  name,
  likes = 56553,
  mediaUrl,
  avatarUrl,
  verified,
  price,
  currency,
}) {
  return (
    <div className="card">
        <Avatar url={avatarUrl} verified={true}/>
        <img src={mediaUrl} className="media"/>
        <h3 className='title'>{name}</h3>
        <p className='price'>{price} {currency}</p>
        <button className="likes">
          <Chip label={millify(likes)}></Chip>
        </button>
    </div>
  );
}
