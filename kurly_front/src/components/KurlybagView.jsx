import { useState } from "react";
import styled from "styled-components";
import imgPlaceHolder from "../images/imgPlaceHolder.png";
import kurlyBagImg from "../images/kurly_bag_img.gif";
import questionMark from "../images/questionmark.png";

const KurlybagView = ({ active })=>{
    const [count, setCount] = useState(1);
    const [tutorial, setTutorial] = useState(false);
    console.log(active)
    return (
        <>
            <StBox>
                <StCartTopImgBox>
                    <StCartTopTitleBox>
                        <StCartTopKurlyBag>Kurly Bag</StCartTopKurlyBag>
                        <StCartTopTutorialBtn
                        onClick={()=>{setTutorial(true)}}
                        ></StCartTopTutorialBtn>
                    </StCartTopTitleBox>
                    {
                        active
                        ? 
                        <>
                        <StCartTopImg></StCartTopImg>
                        <StCartTopText>
                        할리님이 장보는 패턴을 분석해 이번 주 추천 상품을 준비했어요
                        </StCartTopText>
                        </>
                        :
                        <>
                        <StCartEmptyText>
                        컬리백을 다시 켜주시면 은선님에게 더 잘 맞는 상품을 담아서 찾아올게요.
                        </StCartEmptyText>
                        </>
                    }
                </StCartTopImgBox>
                <StCartKurlyBagBox>
                    {
                        active
                        ?
                        <>
                        <StSelectAllBox>
                        <StSelectText>
                            <StSeletCheckbox></StSeletCheckbox>
                            컬리백 전체선택
                        </StSelectText>
                        <StSelectDel>선택삭제</StSelectDel>
                    </StSelectAllBox>
                        </>
                        :
                        <></>
                    }
                </StCartKurlyBagBox>
            </StBox>
        </>
    );
}
const StCartEmptyText = styled.div`
    /* 컬리백을 다시 켜주시면 은선님에게 더 잘 맞는 상품을 담아서 찾아올게요. */
    width: 278px;
    height: 44px;
    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    margin-top: 130px;

    text-align: center;
    letter-spacing: -0.02em;

    color: #999999;
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

`
const StProductImg = styled.div`
    width: 165px;
    height: 227.672px;
    background-image: url(${props => props.imgSrc || imgPlaceHolder});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`

const StCartTopKurlyBag = styled.div`
    width: 100px;
    height: 24px;

    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #000000;
`
const StCartTopTutorialBtn = styled.div`
    width: 17.5px;
    height: 17.5px;
    background-image: url(${questionMark});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 240px;
`
const StCartTopText = styled.div`
    width: 261px;
    height: 60px;

    font-family:  -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    margin-top: 22px;

    text-align: center;
    letter-spacing: -0.02em;

    color: #333333;
`
const StCartTopImg = styled.div`
    width: 130px;
    height: 140px;
    background-image: url(${kurlyBagImg});
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 50px;
`
const StCartTopTitleBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-items: center;
`
const StCartTopImgBox = styled.div`
    width: 349px;
    height: 349px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #F4F4F4;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
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

export default KurlybagView