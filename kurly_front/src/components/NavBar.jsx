import styled from "styled-components"
import kurly_logo from "../images/kurly_logo.png"
import cartImg from "../images/cart.svg"
import mapImg from "../images/map.svg"


const NavBar = () => {
    return (
        <>
          <StNavBar>
            <StLogo></StLogo>
            <StRightSection>
                <StMapImg></StMapImg>
                <StCartImg></StCartImg>
            </StRightSection>
          </StNavBar>
        </>
    )
}

const StRightSection = styled.div`
    width: 97.234px;
    display: flex;
    flex-direction: row;
    margin-right: 16px;
    justify-content: space-around;
    align-items: center;

`
const StCartImg = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${cartImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    cursor: pointer;
    box-sizing: border-box;
`

const StMapImg = styled.div`
    width: 18px;
    height: 24px;
    background-image: url(${mapImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    box-sizing: border-box;
`
const StLogo = styled.div`
    width: 58px;
    height: 30px;
    background-image: url(${kurly_logo});
    background-size: contain;
    margin-left: 16px;
    background-repeat: no-repeat;
`
const StNavBar = styled.div`
    width : 100%;
    height : 44px;
    background-color: #5F0080;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0px;
`

export default NavBar;