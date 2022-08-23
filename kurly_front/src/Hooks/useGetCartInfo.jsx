import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetCartInfo = ({user_id}) => {
    const fetcher = async () => {
        const { data } = await apis.getCart({user_id});
        return data;
    }
    return useQuery("cartInfo", fetcher);
}