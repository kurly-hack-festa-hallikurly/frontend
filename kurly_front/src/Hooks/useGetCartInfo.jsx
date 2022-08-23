import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetCartInfo = () => {
    const fetcher = async () => {
        const { data } = await apis.getCart();
        return data;
    }
    return useQuery("cartInfo", fetcher);
}