import styles from "./Card.module.scss";
import { Chip } from "@mui/material";
import Avatar from "../avatar/Avatar";
import User from "../user/User";
import millify from "millify";
export default function Card({name="", likes=0, mediaUrl="", avatarUrl="", verified=false, price="", currency=""}){
  
    
    return (
    <div className="card">
        <title className="title">{name}</title>
        <Chip label="Clickable" onClick={() => likes+1}><button className="likes">{millify(likes)}</button></Chip>
        <Avatar mediaUrl={<img src={mediaUrl} className="media"></img>}/>
        <User avatarUrl={avatarUrl} verified={false}/>
        <price className="price">{price}</price>
    </div>
    )
}