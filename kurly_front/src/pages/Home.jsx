import { useEffect, useState } from "react";
import styled from "styled-components"

import GlobalBottomNavi from "../components/GlobalBottomNavi";
import GlobalTopNavi from "../components/GlobalTopNavi";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Snackbar from "../components/Snackbar";
import { useGetHome } from "../Hooks/useGetHome";

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [snackbar, setSnackbar] = useState(false);
    
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const user_id = 1
    const {data} = useGetHome({user_id});
    console.log(data);

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
        if (scrollPosition > 800){
            setSnackbar(true);
            window.removeEventListener('scroll', updateScroll)
        } 
    }, [scrollPosition]);

    useEffect(()=>{
        const windowResize = () => {
            setWidth(window.innerWidth)
            // console.log(width);
        }
        window.addEventListener(`resize`, windowResize);
    }, [width])
    
    // if (width > 414) {
    //     // return <>모바일 사이즈에 최적화 되어 있습니다. 가로 사이즈를 390픽셀로 줄여주세요</>
    //     return (
    //         <>
    //             <StPCWrapper>
    //             <StBox>
    //                 <NavBar></NavBar>
    //                 <GlobalTopNavi></GlobalTopNavi>
    //                 {
    //                     snackbar
    //                     ?
    //                     <>
    //                         <Snackbar></Snackbar>
    //                     </>
    //                     :
    //                     <></>
    //                 }
    //                 <Jumbotron></Jumbotron>
    //                 <ProductList></ProductList>
    //                 <GlobalBottomNavi></GlobalBottomNavi>
    //             </StBox>
    //             </StPCWrapper>
    //         </>
    //     )
    // } else {
        return (
            <>
                <StBox>
                    <NavBar></NavBar>
                    <GlobalTopNavi></GlobalTopNavi>
                    {
                        snackbar
                        ?
                        <>
                            <Snackbar></Snackbar>
                        </>
                        :
                        <></>
                    }
                    <Jumbotron></Jumbotron>
                    <ProductList></ProductList>
                    <GlobalBottomNavi></GlobalBottomNavi>
                </StBox>
            </>
        )
    }
    
// }
// const StPCWrapper = styled.div`
    // 
// `
const StBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 390px;
    height: fit-content;
`

export default Home;