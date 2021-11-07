import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from 'classnames';
import Header from "../header/Header";
import Trending from "../trending/Trending";
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";
import How from "../how/How";


export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Trending cards={[]}/>
      <Auctions cards={[]}/>
      <How description="this is a card" 
      title="this is the title" 
      items={[{
        title: "ivan i go6o",
        description: "this is ivan i go6o"
      },{
        title: "pe6o i to6o",
        description: "pesho i tosho team"
    }]}
      link="https://bg.wikipedia.org/wiki/SVG#/media/%D0%A4%D0%B0%D0%B9%D0%BB:SVG_Logo.svg"
      
      />
      <Container className={classNames(styles.container)} maxWidth="xl">
      
        <Paper className={classNames(styles.paper)}>
       
          <Link href="/about" color="secondary">
          
          </Link>
        </Paper>
      </Container>
      <Footer type="muted"/>
    </div>
  );
}

