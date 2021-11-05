import Grid from "@mui/material/Grid";
import Item from '@mui/material/ListItemAvatar';
import Step from "../step/Step";
import styles from "./How.module.scss";

export default function How({description, title, items=[], link}){
const mappedItems = items.map((it, index) => {
    <Step number={index} title={it.title} description={it.description}/>
})
    return (
    <div>
        <Grid container>
            <Grid item><Item>{description}</Item></Grid>
            <Grid item><Item>{title}</Item></Grid>
            <Grid item><Item>{description}</Item></Grid>
            <Grid item><Item><button href={link}>Learn more</button></Item></Grid>
        </Grid>
        <Grid container>
        <Grid item>{mappedItems}</Grid>
        </Grid>
        
    </div>
    )
}