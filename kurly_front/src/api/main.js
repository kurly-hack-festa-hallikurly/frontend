import api from "./core";

const apis = {
    //get
    getInitData: (data)=> api.get(`/home?user_id=${data.user_id}`),
    getProduct: ()=>api.get(`/products/all`),
    getCart: (data)=> api.get(`/shopping-baskets?user_id=${data.user_id}`), 
    getKurlyBag: (data)=> api.get(`/shopping-baskets/kurly-bag?user_id=${data.user_id}`), 
    
    //post
    postOrder: (data)=>api.post(`/orders`, data), // "product_no": 10500,"user_id": 1
    postCart: (data)=>api.post(`/shopping-baskets`, data),
    postUser: (data)=>api.post(`/user`, data),
    //else
    putCart: (data)=>api.post(`/shopping-baskets`, data),
    deleteCart: (data)=>api.delete(`/shopping-baskets`, data),

}

export default apis;