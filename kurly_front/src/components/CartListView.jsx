import styled from "styled-components";
import imgPlaceHolder from "../images/imgPlaceHolder.png"

const CartListView = ({ productNo, productNm, productImgPath, price })=>{
    return (
        <>
            <StBox>
                <StProductImg imgSrc={productImgPath}>
                </StProductImg>
                <StProductInfo>
                    <StDeliType>샛별배송</StDeliType>
                    <StProductTitle>{productNm}</StProductTitle>
                    <StProductPrice>{price} 원</StProductPrice>
                    <StKurlyOnlyLabel>Kurly Only</StKurlyOnlyLabel>
                </StProductInfo>
            </StBox>
        </>
    );
}
const StKurlyOnlyLabel = styled.div`
    padding: 2px 6px;
    border-radius: 4px;
    background-color: rgb(244, 244, 244);
    font-weight: 600;
    font-size: 10px;
    color: rgb(95, 0, 128);
    line-height: 16px;
    width: 51.9px;
`
const StProductPrice = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 19px;
    white-space: nowrap;
`
const StProductTitle = styled.div`
    overflow: hidden;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
`
const StDeliType = styled.div`
    color: rgb(153, 153, 153);
    font-size: 12px;
    line-height: 16px;
`
const StProductInfo = styled.div`
    width: 170px;
    height: 155px;
    box-sizing: border-box;
    font-size: 14px;
    color: rgb(51, 51, 51);
    padding: 7px 5px 0px 0px;

`
const StProductImg = styled.div`
    width: 165px;
    height: 227.672px;
    background-image: url(${props => props.imgSrc || imgPlaceHolder});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

const StBox = styled.div`
    width: 50%;
    height: 382.672px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    display: flex;
    flex-direction: column;
`

export default CartListView