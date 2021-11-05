import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import Trending from "../trending/Trending";
import Auctions from "../auctions/Auctions";


export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Trending cards={[]}/>
      <Auctions cards={[]}/>
      <Container className={classNames(styles.container)} maxWidth="xl">
      
        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
      {/* <Footer type="muted"/> */}
    </div>
  );
}
