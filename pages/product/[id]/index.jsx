import products from "../../../public/data/nfts.json";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Product(){

    //  const [idProduct, setIdProduct] = useState({});

    // useEffect(() => {
    //     products.filter(el => {
    //         if(el.id == id){
    //             setIdProduct(el)
    //         }
    //     })
    // },[idProduct])
    const router = useRouter();
   const { id } = router.query;
    let correctId;
    products.filter(el => {
                if(el.id == id){
                    correctId = el;
              }
            })
   
  
    return (
     <Container maxWidth="sm">
         <Header />
         <ProductContainer props={correctId}/>
         <Footer />
     </Container>
    )
}