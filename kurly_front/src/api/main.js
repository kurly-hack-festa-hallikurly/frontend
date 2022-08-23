import api from "./core";

const apis = {
    //get
    getInitData: ()=> api.get(`/home`),
    getCart: (data)=> api.get(`/shopping-baskets`, data), //user_id
    getKurlyBag: (data)=> api.get(`/shopping-baskets/kurly-bag`, data), //user_id
    getProduct: ()=>api.get(`/products/all`),
    //post
    postOrder: (data)=>api.post(`/orders`, data), // "product_no": 10500,"user_id": 1
    postCart: (data)=>api.post(`/shopping-baskets`, data),
    postUser: (data)=>api.post(`/user`, data),
    //else
    putCart: (data)=>api.post(`/shopping-baskets`, data),
    deleteCart: (data)=>api.delete(`/shopping-baskets`, data),

}

export default apis;