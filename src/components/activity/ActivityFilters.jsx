import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import { Select, InputLabel, MenuItem, TextField, Stack, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function ActivityFilters({ filters }) {

    return (
        <div className={classNames(styles['activity-filters'])}>
            <FormControl>
            <InputLabel>Sort by</InputLabel>
            <Select>
                <Stack>
                    <MenuItem value="1">Ascending</MenuItem>
                    <MenuItem value="2">Descending</MenuItem>
                </Stack>
            </Select>

            <InputLabel>Type</InputLabel>
            <Select>
                <Stack>
                    <MenuItem value="3">Liked</MenuItem>
                    <MenuItem value="4">Bought</MenuItem>
                   
                </Stack>
            </Select>

            <TextField className={classNames(styles["text-field"])}
                InputProps={{
                    startAdornment: (
                        <InputAdornment variant="standard" >
                            <SearchIcon sx={{ color: "#E1E1FC" }} />
                        </InputAdornment>
                    )
                }}
            />
            </FormControl>
        </div>
    )
}