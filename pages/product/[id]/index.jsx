import nftsData from "../../../public/data/nfts.json";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";


export default function Product(){
   const router = useRouter();
   const { id } = router.query;
    return (
     <Container maxWidth="sm">
         <Header />
         <ProductContainer/>
         <Footer />
     </Container>
    )
}