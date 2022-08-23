import { useQuery } from "react-query";
import apis from "../api/main";

export const useGetHome = ({user_id}) => {
    const fetcher = async () => {
        const { data } = await apis.getInitData({user_id});
        return data;
    }
    return useQuery("initData", fetcher);
}