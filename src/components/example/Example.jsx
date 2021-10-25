import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import User from "../user/User";
import Avatar from "../avatar/Avatar";
import Card from "../card/Card";
import { boolean } from "mathjs";




export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Avatar url={'../images/avatar.png'}/>
      <User/>
      <Card name="Gorcho" likes={65} mediaUrl="../images/nft.jpg" avatarUrl="../images/avatar.png" verified={true} price="64731" currency="BGN"/>
      <Container className={classNames(styles.container)} maxWidth="xl">
      

        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
