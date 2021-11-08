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

export default function Index() {
const [featuredCards, setFeaturedCards] = useState([]);
useEffect(() => {
  setFeaturedCards(featuredData);
}, [])

  return (
    <div>
    <Header />
    <Featured props={JSON.parse(featuredData)}/>
    <Trending props={trendingData}/>
    <TopCollectors props={usersData}/>
    <How />
    <Auctions props={nftsData}/>
    <Footer />
    </div>
  )
}



{/* <Example />; */}