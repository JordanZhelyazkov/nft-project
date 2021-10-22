import styles from "./Card.module.scss";
import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import User from "../user/User";
import millify from "millify";
export default function Card({name="", likes=0, mediaUrl="", avatarUrl="", verified=false, price="", currency=""}) {
  
    
    return (
    <div className="card">
        <User mediaUrl={mediaUrl} className="media"/>
        <title className="title">{name}</title>
        <p className="price">{price}</p>
        <Chip label="Clickable" onClick={() => likes+1}><button className="likes">{millify(likes, {
  units: ["K"],
  space: true,
})}</button></Chip>
        <Avatar avatarUrl={avatarUrl} verified={false}/>
    </div>
    )
}