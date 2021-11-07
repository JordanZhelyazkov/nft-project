import Grid from "@mui/material/Grid";
import Item from '@mui/material/ListItemAvatar';
import Step from "../step/Step";
import styles from "./How.module.scss";
import classNames from "classnames";
import Paper from '@mui/material/Paper';



export default function How({description, title, items = [], link}){
const mappedItems = items.map((it, index) => 
<Step number={index} title={it.title} description={it.description}/>)
    return (
        <div className={classNames(styles.wrapper,styles.container, styles.paper)} >
        <Grid container  style={{display: 'flex', flexDirection: "column", justifyContent: 'flex-start'}}>
            <Grid item><Item>{title}</Item></Grid>
            <Grid item><Item>{description}</Item></Grid>
            <Grid item><Item><button href={link}>Learn more</button></Item></Grid>
            {mappedItems} 
        </Grid>
          
    </div>
    )
}