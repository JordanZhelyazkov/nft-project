import styles from "./Card.module.scss";
import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";

export default function Card({name, likes, mediaUrl, avatarUrl, verified, price, currency}) {
  
    const handleClick = (likes) => {
     return likes++;
    }
    
    return (
    <div className="card">
        <Avatar url={avatarUrl} ifVerified={verified}></Avatar>
        <img src={mediaUrl} className="media"></img>
        <p className="title">{name}</p>
        <p className="price">{price} {currency}</p>
        <button className="likes"><Chip label={millify(likes)}></Chip></button>
    </div>
    )
}