import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import { parseISO, formatDistance } from 'date-fns';


export default function ActivityItem({ user, created_at, nft, type = "like" }) {

    return (
        <div className={classNames(styles['activity-item'])}>
            <Avatar {...user}/>
            <p><Link to={user}>{user.name}</Link>{type === "like" ? "likes" : "bought"}<Link to={nft}>{nft.name}</Link></p>
            <p>{formatDistance(parseISO(created_at), new Date(), {
                    addSuffix: true,
                })}</p>
        </div>
    )
}