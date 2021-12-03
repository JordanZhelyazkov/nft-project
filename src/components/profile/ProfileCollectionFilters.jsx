import {  Select, InputLabel, MenuItem, TextField } from "@mui/material";
import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss";


export default function ProfileCollectionFilters({ filters }) {
    const inputProps = {
        variant: "standart"
      };
    return (
        <div className={classNames(styles['profile-collection-filters'])}>
           
                <InputLabel>Sort by</InputLabel>
                <Select>
                    <MenuItem value=""></MenuItem>
                </Select>

                <InputLabel>Price range</InputLabel>
                <Select>
                    <MenuItem value=""></MenuItem>
                </Select>

                <TextField  inputProps={inputProps}/>
                
           
        </div>
    )
}