import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Link from "react-router-dom";
import { parseISO, formatDistance } from 'date-fns';



export default function ActivityListItem({ user, created_at, nft, type = "like" }) {

    return (
        <div className={classNames(styles['activity-item'])}>
            <Avatar size="10px" url={user.avatarUrl} verified={user.verified} />
            <p>{user.name}{type === "like" ? "likes" : "bought"}<Link to={`nft/${nft.name}`}>{nft.name}</Link>
            <Link to={`nft/user/${nft.user.name}`}>{nft.user.name}</Link>
            </p>
            <p>{formatDistance(parseISO(created_at), new Date(), {
                    addSuffix: true,
                })}</p>
        </div>
    )
}