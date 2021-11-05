import Logo from "../logo/Logo";
import classNames from "classnames";
import { Container } from "@mui/material/Container";
import styles from "./Footer.module.scss";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItemAvatar';
 
export default function Footer({type}){
 
    return (
<div className={classNames(styles.wrapper, styles.container)}>
 <Logo type={type}/>
 <Grid container style={{justifyContent: "flex-end"}}
        className="gridContainer"
        spacing={2}
        rowGap='3rem'
      >
        <Grid item><Item>BUM All Rights Reserved</Item></Grid>
        <Grid item><Item>Privacy policy</Item></Grid>
        <Grid item><Item>Cookie policy</Item></Grid>
      </Grid>
</div>
    )
}