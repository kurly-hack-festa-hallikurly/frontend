import styled from "styled-components";

const GlobalTopNavi = () => {
    return(
        <>
            <StBox>
                <StMenuWrapper> 
                    <StMenu borderBottom={'2px solid rgb(95, 0, 128)'} color={'rgb(95, 0, 128)'} >컬리추천</StMenu>
                    <StMenu>신상품</StMenu>
                    <StMenu>베스트</StMenu>
                    <StMenu>알뜰쇼핑</StMenu>
                    <StMenu>특가/혜택</StMenu>
                </StMenuWrapper>
            </StBox>
        </>
    );
}
const StMenuWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    box-sizing: border-box;
    height: 100%;
`
 
const StMenu = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 0.938rem;
    color: ${props => props.color || 'rgb(102, 102, 102)'};
    font-family: -apple-system, BlinkMacSystemFont, AppleSDGothicNeo, "Apple SD Gothic Neo", Helvetica, "Noto Sans KR", "malgun gothic", "맑은 고딕", sans-serif;
    height:100%;
    align-items: center;
    border-bottom: ${props => props.borderBottom || 'none'};
    font-weight: 600;
    box-sizing: border-box;
`

const StBox = styled.div`
    width : 390px;
    height : 44px;
    background-color: #FFFFFF;
    position: fixed;
    top: 44px;
`

export default GlobalTopNavi