import styled from "styled-components";
import ProductListView from "./ProductListView";

const ProductList = () => {
    return(
        <>
            <StBox>
                <StFilterBox>
                    <StProductVolume>
                        총 293건
                    </StProductVolume>
                    <StFilter>
                        추천순
                    </StFilter>
                </StFilterBox>
                <StProductWrapper>
                    
                    <ProductListView
                    
                    >

                    </ProductListView>
                </StProductWrapper>
            </StBox>

        </>
    );
}

const StProductWrapper = styled.div`
    width: 358px;
    height: fit-content;
    margin: auto;
    background-color: blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
`

const StFilter = styled.div`
    font-size: 14px;
    color: rgb(51, 51, 51);
    white-space: nowrap;
`
const StProductVolume = styled.div`
    font-size: 14px;
    color: rgb(51, 51, 51);
    white-space: nowrap;
`

const StFilterBox = styled.div`
    width: 100%;
    height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StBox = styled.div`
    width: 100%;
    height: fit-content;
    padding: 7px 16px 2px;
    box-sizing: border-box;
`

export default ProductList