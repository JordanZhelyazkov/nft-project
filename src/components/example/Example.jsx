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
import Featured from "../featured/Featured";
import TopCollectors from "../collectors/TopCollectors";
import ProductImage from "../product/ProductImage";



export default function Copyright() {
  return (
    
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Trending cards={[]}/>
      <Auctions cards={[]}/>
      <How  />
      <Featured items={[
        {
          image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
          title: 'Breakfast',
          rows: 2,
          cols: 3,
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
          title: 'Burger',
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
          title: 'Camera',
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
          title: 'Coffee',
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
          title: 'Hats',
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
          title: 'Honey',
          href: "/about"
        },{
          image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
          title: 'Basketball',
          href: "/about"
        }
      ]}/>
      <TopCollectors collectors={[]}/>
      <ProductImage  url="../public/images/nft.jpg"/>
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

