import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import { parseISO, formatDistance } from 'date-fns';


export default function ActivityListItem({ 
    user,
    created_at,
    nft,
    type = "like" }) {
    
    return (
        <div className={classNames(styles['activity-item'])}>
            <Avatar url={user.avatar.url} verified={user.verified} />
            <p>{user.username}{type === "like" ? "likes" : "bought"}<Link href={`/nft/${nft.name}`}>{nft.name}</Link> 
            <Link href={`/nft/owner/${nft.owner.username}`}>{nft.owner.username}</Link></p> 
            <p>{formatDistance(parseISO(created_at), new Date())} ago</p>
        </div>
    )
}