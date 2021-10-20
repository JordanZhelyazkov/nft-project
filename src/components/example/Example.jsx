import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";




export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      
      <Container className={classNames(styles.container)} maxWidth="xl">
      <Avatar  size={90} url="/images/avatar.png" verified={true}/>

        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
