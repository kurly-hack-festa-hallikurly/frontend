import { useEffect, useState } from "react";
import styled from "styled-components"

import GlobalBottomNavi from "../components/GlobalBottomNavi";
import GlobalTopNavi from "../components/GlobalTopNavi";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const windowResize = () => {
            setWidth(window.innerWidth)
            console.log(width);
        }
        window.addEventListener(`resize`, windowResize);
    }, [width])
    if (width>390) {
        return <>모바일 사이즈에 최적화 되어 있습니다. 가로 사이즈를 390픽셀로 줄여주세요</>
    } else {
        return (
            <>
                <StBox>
                    <NavBar></NavBar>
                    <GlobalTopNavi></GlobalTopNavi>
                    {width}
                    <Jumbotron></Jumbotron>
                    <ProductList></ProductList>
                    <GlobalBottomNavi></GlobalBottomNavi>
                </StBox>
            </>
        )
    }
    
}

const StBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 390px;
    height: fit-content;
`

export default Home;