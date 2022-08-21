import styled from "styled-components";
import home_active from "../images/home_active.svg";
import hamburger from "../images/hamburger.svg";
import search from "../images/search.svg";
import mypage from "../images/mypage.svg";

const GlobalBottomNavi = () => {
    return(
        <>
            <StBox>
                <StMenuBox><StMenuImg img={home_active}></StMenuImg></StMenuBox>
                <StMenuBox><StMenuImg img={hamburger}></StMenuImg></StMenuBox>
                <StMenuBox><StMenuImg img={search}></StMenuImg></StMenuBox>
                <StMenuBox><StMenuImg img={mypage}></StMenuImg></StMenuBox>
            </StBox>
        </>
    );
}
const StMenuImg = styled.div`
    width: 24px;
    height: 24px;
    background-color: #fff;
    background-image: url(${props => props.img});
    color: ${props => props.color || 'rgb(102, 102, 102)'};
`
const StMenuBox = styled.div`
    height: 100%;
    width: 65.5px;
    margin-left: 16px;
    margin-right: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const StBox = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 0px;
    display: flex;
    width: 390px;
    height: 45px;
    border-top: 1px solid rgb(221, 221, 221);
    background-color: rgb(252, 252, 252);
    box-sizing: border-box;
`

export default GlobalBottomNavi;