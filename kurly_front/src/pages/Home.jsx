import styled from "styled-components"

import GlobalBottomNavi from "../components/GlobalBottomNavi";
import GlobalTopNavi from "../components/GlobalTopNavi";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

const Home = () => {
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
    height: fit-content;
    border: 1px solid black;
`

export default Home;