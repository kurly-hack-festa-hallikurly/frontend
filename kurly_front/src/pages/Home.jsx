import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import GlobalBottomNavi from "../components/GlobalBottomNavi";
import GlobalTopNavi from "../components/GlobalTopNavi";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

import { useGetProductInfo } from "../Hooks/useGetProductInfo"

const Home = () => {
    const { data } = useGetProductInfo();
    console.log( data )
    return (
        <>
            <StBox>
                <NavBar></NavBar>
                <GlobalTopNavi></GlobalTopNavi>
                <Jumbotron></Jumbotron>
                <ProductList></ProductList>
                <GlobalBottomNavi></GlobalBottomNavi>
            </StBox>
        </>
    )
}

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 390px;
    height: 844px;
    border: 1px solid black;
`

export default Home;