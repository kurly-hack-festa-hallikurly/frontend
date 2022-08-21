import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetProductInfo = () => {
    const fetcher = async () => {
        const { data } = await apis.getProduct();
        return data;
    }
    return useQuery("productInfo", fetcher);
}