import Logo from '../logo/Logo';
import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "../example/Example.module.scss";
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
export default function Header() {

    return (
        <div className={classNames(styles.wrapper)} style={{background: "#0c0c14"}}>
        <Grid container >
        <Logo type='default'/>
            <Grid item>
            <Container >Home</Container>
            </Grid>
            <Grid item>
            <Container>Activity</Container>
            </Grid>
            <Grid item>
            <Container>EXPLORE</Container>
            </Grid>
        </Grid>
        </div>
    )
}