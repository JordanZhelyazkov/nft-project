import Logo from '../logo/Logo';
import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Grid from '@mui/material/Grid';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { IconButton, TextField } from '@mui/material';



export default function Header() {
    
    return (
        <div className={classNames(styles.wrapper)}>
        <Logo type='default'/>
        <TextField  type="search" placeholder="Find items, users and activities" 
        InputProps={{
     endAdornment: (
    <IconButton >
    <SearchSharpIcon style={{color: 'white'}}  />
    </IconButton>
    ) } } />
        <Grid container
     direction="row"
     justifyContent="flex-end"
     alignItems="center"
        >
            <Grid item xs>
            Home
            </Grid>
            <Grid item xs>
            Activity
            </Grid>
            <Grid item xs>
            EXPLORE
            </Grid>
        </Grid>
    </div>
    )
}