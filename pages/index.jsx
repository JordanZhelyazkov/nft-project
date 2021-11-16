import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import featuredData from "../public/data/featured.json";
import nftsData from "../public/data/nfts.json";
import trendingData from "../public/data/trending.json";
import usersData from "../public/data/users.json";
import { useState, useEffect } from "react";
import ProductActions from "../src/components/product/ProductActions";



export default function Index() {
const [featuredCards, setFeaturedCards] = useState([]);
const [trending, setTrending] = useState([]);
const [users, setUsers] = useState([]);
const [nft, setNfts] = useState([]);
useEffect(() => {
  setFeaturedCards(featuredData);
  setTrending(trendingData);
  setUsers(usersData);
  setNfts(nftsData);
}, [])

  return (
    <div>
    <Header />
    <Featured items={featuredData}/>
    <Trending cards={trendingData}/>
    <TopCollectors collectors={usersData.sort((a, b) => b - a)}/>
    <How />
    <Auctions cards={nftsData}/>
    <ProductActions isLive={true} currency={"ETH"} buyAmount={50} bidAmount={9} />
    <Footer />
    
    </div>
  )
}




  