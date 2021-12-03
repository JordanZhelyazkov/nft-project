import { FormControl, Select, InputLabel, MenuItem, Stack, InputAdornment, TextField, Search } from "@mui/material";
import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss";
import SearchIcon from '@mui/icons-material/Search';

export default function ProfileCollectionFilters({ filters }) {

    return (
        <div className={classNames(styles['profile-collection-filters'])}>
            <FormControl>
                <InputLabel>Sort by</InputLabel>
                <Select>
                    <MenuItem value=""></MenuItem>
                </Select>

                <InputLabel>Price range</InputLabel>
                <Select>
                    <MenuItem value=""></MenuItem>
                </Select>

                {/* <TextField
                    variant="standart"
                    type="search"
                    InputProps={{
                        inputAdornment: (
                            <InputAdornment>
                            <Search >
                                <SearchIcon />
                            </Search>
                            </InputAdornment>
                        )
                    }}
                >
                </TextField> */}
            </FormControl>
        </div>
    )
}