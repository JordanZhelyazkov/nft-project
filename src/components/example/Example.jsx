import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import User from "../user/User";
import Avatar from "../avatar/Avatar";
import Card from "../card/Card";





export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      
      <User/>
      
      <Container className={classNames(styles.container)} maxWidth="xl">
      
      <Card name="Gorcho"  mediaUrl="../images/nft.jpg" avatarUrl="../images/avatar.png" verified={false} price="64731" currency="ETH"/>
        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
