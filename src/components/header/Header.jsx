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
      <Logo type="default" />
      <TextField 
        type="search"
        placeholder="Find items, users and activities"
        style={{width: '80%'}}
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ),
        }}
      />
      <Grid 
        container
        spacing={2}
        rowGap='2rem'
      >
        <Grid item><Item>Home</Item></Grid>
        <Grid item><Item>Activity</Item></Grid>
        <Grid item><Item>EXPLORE</Item></Grid>
      </Grid>
    </div>
  );
}

