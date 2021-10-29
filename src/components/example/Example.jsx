import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import Trending from "../trending/Trending";

export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Trending cards={[]}/>
      <Container className={classNames(styles.container)} maxWidth="xl">
      
        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
// {name: "Ivu", user: {avatarUrl: 'images/avatar.png', verified: true}, mediaUrl: "images/nft.jpg", price: 1, currency: "ETH"},
//     {name: "Go6o", user: {avatarUrl: 'images/avatar.png', verified: true}, mediaUrl: "images/nft.jpg", price: 1, currency: "ETH"},
//     {name: "Ivan", user: {avatarUrl: 'images/avatar.png', verified: true}, mediaUrl: "images/nft.jpg", price: 1, currency: "ETH"},
//     {name: "Petko", user: {avatarUrl: 'images/avatar.png', verified: true}, mediaUrl: "images/nft.jpg", price: 1, currency: "ETH"}