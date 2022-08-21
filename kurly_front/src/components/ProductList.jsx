import styled from "styled-components";

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
                <StProductBox>

                </StProductBox>
            </StBox>

        </>
    );
}

const StProductBox = styled.div`

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