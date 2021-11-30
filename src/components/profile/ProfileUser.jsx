import classNames from "classnames";
import styles from "./ProfileUser.module.scss";
import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material"

export default function ProfileUser({name,info,avatar,verified}){

    return(
        <div className={classNames(styles['profile-user'])}>
           <Avatar avatar={avatar} verified={verified}/>
           <Typography variant="h3">
            {name}
           </Typography>
           <Typography variant="body1">
            {info}
           </Typography>
        </div>
    )
}