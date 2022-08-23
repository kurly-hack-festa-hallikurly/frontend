import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetKurlybagInfo = ({user_id}) => {
    const fetcher = async () => {
        const { data } = await apis.getKurlyBag({user_id});
        return data;
    }
    return useQuery("KurlybagInfo", fetcher);
}