import {  Select, InputLabel, MenuItem, TextField, Stack } from "@mui/material";
import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss";
import SearchIcon from '@mui/icons-material/Search';


export default function ProfileCollectionFilters({ filters }) {
    
    return (
        <div className={classNames(styles['profile-collection-filters'])}>
           
           <InputLabel>Sort by</InputLabel>
                <Select>
                    <Stack>
                    <MenuItem value="1">Ascending</MenuItem>
                    <MenuItem value="2">Descending</MenuItem>
                    </Stack>
                </Select>
                
                <InputLabel>Price range</InputLabel>
                <Select>
                    <Stack>
                    <MenuItem value="3">0.3 - 0.5 ETH</MenuItem>
                    <MenuItem value="4">0.5 - 2 ETH</MenuItem>
                    <MenuItem value="5">2- 3 ETH</MenuItem>
                    </Stack>
                </Select>

                <TextField 
               
                InputProps={{
                    variant: "standard",
                    startAdornment: (
                    <SearchIcon />
                    )
                }}
                />
                
           
        </div>
    )
}