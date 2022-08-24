import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import snack_img from "../images/snac_img.png";

const Snackbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
            <StBox
            onClick={()=>{
            navigate('/cart')}}>
                <StSnackImg></StSnackImg>
                <StSnackText>
                    할리님이 좋아할 만한 상품들을 컬리가 장바구니에 담아뒀어요!
                </StSnackText>
            </StBox>
        </>
    );
}
const StSnackText = styled.div`
    margin-left: 13px;
    /* 은선님이 좋아할 만한 상품들을 컬리가 장바구니에 담아뒀어요! */

    width: 201px;
    height: 50px;
    left: 80px;
    top: 116px;

    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 25px;
    /* or 147% */

    letter-spacing: -0.014em;

    color: #242225;
`
const StSnackImg = styled.div`
    width: 42px;
    height: 42px;
    margin-left: 10px;
    background-image: url(${snack_img});
`
const StBox = styled.div`
    /* Rectangle 1 */
    position: fixed;
    width: 358px;
    height: 86px;
    /* left: 15px; */
    top: 98px;
    margin-left: 20px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px -1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 200;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

` 


export default Snackbar;