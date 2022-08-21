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
                    <h1>Hello</h1>
                <GlobalBottomNavi></GlobalBottomNavi>
            </StBox>
        </>
    )
}

const StBox = styled.div`
    width: 390px;
    height: 844px;
    border: 1px solid black;
`

export default Home;