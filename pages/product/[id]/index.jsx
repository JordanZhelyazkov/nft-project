import products from "../../../public/data/nfts.json";
import Header from "../../../src/components/header/Header";
import Footer from "../../../src/components/footer/Footer";
import ProductContainer from "../../../src/components/product/ProductContainer";
import Container from "@mui/material/Container";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Product(){

    const [idProduct, setIdProduct] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        products.filter(el => el.id == id ? setIdProduct(el) : "")
    }, [id])

    return (
        <Container maxWidth="sm">
            <Header />
            <ProductContainer {...idProduct} />
            <Footer />
        </Container>
    )
}