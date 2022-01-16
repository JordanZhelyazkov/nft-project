import Logo from "../logo/Logo";
import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItemAvatar';
import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {
  return (
    <div className={classNames(styles.wrapper,styles.container)} >
      <Logo  />
      <TextField 
        type="search"
        placeholder="Find items, users and activities"
        style={{width: '60%', marginLeft: "5%", marginRight: "5%"}}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ),
        }}
      />
      <Grid 
        style={{marginRight: "5%", marginLeft: "auto", textAlign: "right"}}
        container
        spacing={2}
        rowGap='2rem'
      >
        <Grid item xs={3}><Item>Home</Item></Grid>
        <Grid item item xs={3}><Item>Activity</Item></Grid>
        <Grid item item xs={3}><Item>EXPLORE</Item></Grid>
      </Grid>
    </div>
  );
}

