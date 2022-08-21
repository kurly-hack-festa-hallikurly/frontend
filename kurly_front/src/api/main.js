import api from "./core";


// 토큰에서 뽑아오기

const apis = {
    getKurlyBag: (data)=> api.get(`/api/kurlybag/${data.user_id}`),
    getProduct: ()=>api.get(`/api/product`)
}

export default apis;