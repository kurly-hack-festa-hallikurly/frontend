import styled from "styled-components";
import ProductListView from "./ProductListView";
import { useGetProductInfo } from "../Hooks/useGetProductInfo"

const ProductList = () => {
    const { data } = useGetProductInfo();
    return(
        <>
            <StBox>
                <StFilterBox>
                    <StProductVolume>
                        총 {data?.length}건
                    </StProductVolume>
                    <StFilter>
                        추천순
                    </StFilter>
                </StFilterBox>
                <StProductWrapper>
                    {
                        data?.map((product, index)=>(
                        <ProductListView
                        key={index}
                        productNo={product.product_no}
                        productNm={product.product_nm}
                        price={product.price}
                        productImgPath={product.product_img_path}
                        >
                        </ProductListView>
                        ))
                    }
                </StProductWrapper>
            </StBox>

        </>
    );
}

const StProductWrapper = styled.div`
    width: 100%;
    height: fit-content;
    margin: auto;
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