import Grid from "@mui/material/Grid";
import Item from '@mui/material/ListItemAvatar';
import Step from "../step/Step";
import styles from "./How.module.scss";

export default function How({description, title, items=[], link}){
const mappedItems = items.map((it, index) => {
    <Grid item><Item><Step number={index} title={it.title} description={it.description}/></Item></Grid>
})
    return (
    <div>
        <Grid container>
            <Grid item><Item>{description}</Item></Grid>
            <Grid item><Item>{title}</Item></Grid>
            <Grid item><Item>{description}</Item></Grid>
            <Grid item><Item><button href={link}>Learn more</button></Item></Grid>
            {mappedItems}
        </Grid>
        
    </div>
    )
}