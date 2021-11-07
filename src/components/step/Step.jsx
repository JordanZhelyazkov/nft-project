import Grid from "@mui/material/Grid";
import Item from '@mui/material/ListItemAvatar';
import styles from "./Step.module.scss";
import classNames from "classnames";




export default function Step({number, title, description}){

    return (
    <div className="step" style={{display: 'flex', flexDirection: "column", alignSelf: 'flex-end'}}>
        
        <Grid container >
        
            <Grid ><Item className={classNames(styles.number)}>{number}</Item></Grid>
            <Grid item><Item>{title}</Item></Grid>
            <Grid item><Item>{description}</Item></Grid>
            
        </Grid>
        
    </div>
    )
}