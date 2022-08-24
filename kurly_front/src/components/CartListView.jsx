import styled from "styled-components";
import imgPlaceHolder from "../images/imgPlaceHolder.png";
import kurlyBagImg from "../images/kurly_bag_img.gif";
import delIcon from "../images/delIcon.png";
import { useState } from "react";

const CartListView = ({ productNo, productNm, productImgPath, price })=>{
    const [count, setCount] = useState(1);
    return (
        <>
            <StBox>
                <StProductItemBox>
                    <StCheckBox type="checkbox" checked="true"></StCheckBox>
                <StProductImg imgSrc={productImgPath}>
                </StProductImg>
                <StProductInfo>
                    <StProductTitle>{productNm}</StProductTitle>
                    <StProductPrice>{price} 원</StProductPrice>
                </StProductInfo>
                <StCountBox>
                    <StDelIcon></StDelIcon>
                    <StNumBox>
                        <StMinus
                        onClick={
                            count>1
                            ?()=>{setCount(prev=>prev-1)}
                            :()=>{return}
                        }
                        >-</StMinus>
                        <StNum>{count}</StNum>
                        <StPlus
                        onClick={()=>{setCount(prev=>prev+1)}}>+</StPlus>
                    </StNumBox>
                </StCountBox>
                </StProductItemBox>
            </StBox>
        </>
    );
}
const StNum = styled.div`
    width: 21px;
    height: 28px;
    font-size: 12px;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    padding-top: 6px;
`
const StPlus = styled.div`
    width: 28px;
    height: 28px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
`
const StMinus = styled.div`
    width: 28px;
    height: 28px;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    color: #B5B5B5
`
const StCountBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StNumBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 77px;
    height: 28px;
    left: 272px;
    top: 51px;

    border: 1px solid #DDDFE1;
    border-radius: 3px;
    box-sizing: border-box;
    margin-top: 20px;
`
const StDelIcon = styled.div`
    width: 12px;
    height: 13px;
    background-image: url(${delIcon});
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 10px;
    margin-left: 60px;
`
const StMyProductWrapper = styled.div`
    
`
const StDivider = styled.div`
    width: 100%;
    height: 8px;
    background: #F4F4F4;
` 
const StSelectDel  =styled.div`
    /* 선택삭제 */
    width: 48px;
    height: 24px;

    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    text-align: right;
    letter-spacing: -0.02em;

    /* kurly black 01 */

    color: #333333;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StSelectText = styled.div`
    /* 전체선택 (0/0) */
    width: 140px;
    height: 20px;

    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.01em;
    color: #333333;
    display: flex;
`
const StSeletCheckbox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`
const StSelectAllBox =styled.div`
    display: flex;
    box-sizing: border-box;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    width: 100%;
    height: 48px;
    align-items: center;
    padding: 0 20px 0 20px;
`
const StCartMyBox = styled.div`
`
const StCartKurlyBagBox = styled.div`
`
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
    margin-left: 12px;
`
const StProductImg = styled.div`
    width: 60px;
    height: 78px;
    background-image: url(${props => props.imgSrc || imgPlaceHolder});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`
const StCheckBox = styled.input`
    width: 20px;
    height: 20px;
    align-self: center;
    margin-right: 10px;
`

const StProductItemBox = styled.div`
    width: 349px;
    height: 79px;
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    padding: 0 20px 0 20px;
`
const StBox = styled.div`
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    display: flex;
    flex-direction: column;
    /* padding: 0 20px 0 20px; */
`

export default CartListView