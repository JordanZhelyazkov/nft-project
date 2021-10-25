import styles from "./Card.module.scss";
import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
import "./Card.module.scss";

export default function Card({name, likes=56553, mediaUrl, avatarUrl, verified, price, currency}) {
  
    
    return (
    <div className="card" >
        <Avatar url={avatarUrl} ifVerified={verified}></Avatar>
        <img src={mediaUrl} className="media"></img>
        <h1 className="title">{name}</h1>
        <p className="price">{price} {currency}</p>
        <button className="likes"><Chip label={millify(likes)}></Chip></button>
    </div>
    )
}