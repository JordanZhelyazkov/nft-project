import Logo from '../logo/Logo';
import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Grid from '@mui/material/Grid';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';


export default function Header() {

    return (
        <div className={classNames(styles.wrapper)} style={{background: "#0c0c14"}}>
        <Grid container >
        <Logo type='default'/>
        <TextField type="search" placeholder="Find items, users and activities" 
        InputProps={{
     endAdornment: (
    <InputAdornment position="start" style={{color: 'white'}}>
    <SearchSharpIcon />
    </InputAdornment>
    )
  }}
       />
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