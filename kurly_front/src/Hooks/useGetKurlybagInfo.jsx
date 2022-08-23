import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetKurlybagInfo = () => {
    const fetcher = async () => {
        const { data } = await apis.getKurlyBag();
        return data;
    }
    return useQuery("KurlybagInfo", fetcher);
}