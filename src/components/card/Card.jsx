import styles from "./Card.module.scss";
import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import millify from "millify";
export default function Card({name, likes, mediaUrl, avatarUrl, verified, price, currency}) {
  
    
    return (
    <div className="card">
        <Avatar ><img src={avatarUrl}></img></Avatar>
        <img src={mediaUrl} className="media"></img>
        <title className="title">{name}</title>
        <p className="price">{price} {currency}</p>
        <Chip label="Clickable" onClick={() => likes+1}><button className="likes">{millify(likes, {
  units: ["K"],
  space: true,
})}</button></Chip>
    </div>
    )
}