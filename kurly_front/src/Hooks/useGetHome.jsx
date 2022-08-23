import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetHome = () => {
    const fetcher = async () => {
        const { data } = await apis.getInitData();
        return data;
    }
    return useQuery("initData", fetcher);
}