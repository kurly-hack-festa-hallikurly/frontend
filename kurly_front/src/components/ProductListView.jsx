import styled from "styled-components";
import imgPlaceHolder from "../images/imgPlaceHolder.png"

const ProductListView = ({ productNo, productNm, productImgPath })=>{
    return (
        <>
            <StBox>
                <StProductImg imgSrc={productImgPath}>
                </StProductImg>
                <StProductInfo>
                    <StDeliType>샛별배송</StDeliType>
                    <StProductTitle>productNm</StProductTitle>
                    <StProductPrice></StProductPrice>
                    <StKurlyOnlyLabel>Kurly Only</StKurlyOnlyLabel>
                </StProductInfo>
            </StBox>
        </>
    );
}
const StKurlyOnlyLabel = styled.div`
`
const StProductPrice = styled.div`
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
    width: 175px;
    height: 227.672px;
    background-image: url(${props => props.imgSrc || imgPlaceHolder});
    background-size: cover;
    background-repeat: no-repeat;
`

const StBox = styled.div`
    width: 50%;
    height: 382.672px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    background-color: red;
    display: flex;
    flex-direction: column;
`

export default ProductListView