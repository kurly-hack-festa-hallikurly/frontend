import { useNavigate } from "react-router-dom";
import { useGetProductInfo } from "../Hooks/useGetProductInfo"
import styled from "styled-components";

import backBtn from "../images/backBtn.svg"
import location from "../images/location.svg"
import rightArrow from "../images/right_arrow.svg"
import CartListView from "../components/CartListView";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import KurlybagListView from "../components/KurlybagListView";


const Cart = ()=>{
    const navigate = useNavigate();
    const user_data = useSelector((state)=>state);
    console.log(user_data);
    const [myCartList, setMyCartList] = useState();
    const [KurlybagList, setKurlybagList] = useState();
    const { data } = useGetProductInfo(); // 변경 필요
    useEffect(()=>{
        setMyCartList(data);
        setKurlybagList(data);
    }, [myCartList, KurlybagList, data])

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
                    myCartList
                    ?
                    <>
                    <StSelectAllBox>
                        <StSelectText>
                            <StSeletCheckbox></StSeletCheckbox>
                            전체선택
                        </StSelectText>
                        <StSelectDel>선택삭제</StSelectDel>
                    </StSelectAllBox>
                    </>
                    :
                    <></>
                }   
                {
                    myCartList
                    ?
                    myCartList.map((product, index)=>(
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
                <KurlybagListView></KurlybagListView>
                <StOrderBtn>이대로 주문하기</StOrderBtn>
            </StBox>
        </>
    );
}
const StOrderBtn = styled.div`
    /* btn_주문하기 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    position: fixed;
    width: 366px;
    height: 52px;
    bottom: 18px;

    background: #5F0089;
    border-radius: 10px;
    box-sizing: border-box;
    color: white;
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
    position: absolute;
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