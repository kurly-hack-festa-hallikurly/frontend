import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetProductInfo } from "../Hooks/useGetProductInfo"
import styled from "styled-components";

import backBtn from "../images/backBtn.svg"
import location from "../images/location.svg"
import rightArrow from "../images/right_arrow.svg"
import CartListView from "../components/CartListView";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Cart = ()=>{
    const navigate = useNavigate();
    const user_data = useSelector((state)=>state);
    console.log(user_data);
    const [cartList, setCartList] = useState();
    const { data } = useGetProductInfo();
    console.log(data);
    useEffect(()=>{
        setCartList(data);
    }, [cartList, data])

    return(
        <>
            <StBox>
                <StNavBar>
                    <StBackBtn
                    onClick={()=>{navigate(-1)}}
                    >
                    </StBackBtn>
                    <StCartTitle>장바구니</StCartTitle>
                </StNavBar>
                <StAddressBox>
                    <StAddress>
                        <StLocation>
                        </StLocation>
                        <StAddressText>
                            서울 강동구 초양로 183(창신동동아3차아파트) 304동 301호
                            <StDeliType>
                                샛별배송
                            </StDeliType>
                        </StAddressText>
                        <StRightArrow>
                        </StRightArrow>
                    </StAddress>
                </StAddressBox>
                <StDivider>
                </StDivider>
                {
                    cartList
                    ?
                    cartList.map((product, index)=>(
                    <CartListView
                    key={index}
                    productNo={product.productNo}
                    productNm={product.productNm}
                    price={product.price}
                    productImgPath={product.productImgPath}
                    ></CartListView>
                    ))
                    : <StEmptyBox>
                    장바구니에 담긴 상품이 없습니다
                    </StEmptyBox>
                }
            </StBox>
        </>
    );
}
const StEmptyBox = styled.div`
    display: flex;
    height: calc(100vh - 230px);
    padding-bottom: calc(env(safe-area-inset-bottom));
    font-size: 16px;
    color: rgb(181, 181, 181);
    line-height: 24px;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
`
const StDivider = styled.div`
    width: 100%;
    height: 8px;
    background: rgb(244, 244, 244);
    z-index: 100;
`
const StDeliType = styled.div`
    color: rgb(95, 0, 128);
    font-size: 12px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
`
const StRightArrow = styled.div`
    width: 16px;
    height: 100%;
    background-image: url(${rightArrow});
    background-repeat: no-repeat;
    background-position: 50%;
    margin-left: 20px;
`
const StLocation = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${location});
`
const StAddressText = styled.div`
    /* 배송지 */
    width: 290px;
    height: 34px;

    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.01em;
    color: #333333;

    flex: none;
    order: 0;
    flex-grow: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
const StAddress = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;

    width: 359px;
    height: 52px;

    flex: none;
    order: 0;
    flex-grow: 0;
`
const StAddressBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 56px 12px 16px;

    width: 100%;
    height: px;
    left: 0px;

    background: #FFFFFF;
`
const StCartTitle = styled.div`
    color: rgb(51, 51, 51);
    font-weight: 600;
    font-size: 16px;
`
const StBackBtn = styled.div`
    position: fixed;
    left: 10px;
    width: 44px;
    height: 44px;
    background-image: url(${backBtn});
`
const StNavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 44px;
`
const StBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: fit-content;
`

export default Cart;