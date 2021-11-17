import nftsData from ".../public/data/nfts.json";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import ProductContainer from "../../src/components/product/ProductContainer";
import Container from "@mui/material/Container";


export default function Product(){
console.log(nftsData)
    return (
     <Container maxWidth="sm">
         <Header />
         <ProductContainer {...nftsData}/>
         <Footer />
         
     </Container>
    )
}