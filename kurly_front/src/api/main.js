import api from "./core";

const apis = {
    //get
    getCart: (data)=> api.get(`/shopping-baskets`, data), //user_id
    getKurlyBag: (data)=> api.get(`/shopping-baskets/kurly-bag`, data), //user_id
    getProduct: ()=>api.get(`/product`),
    //post
    postOrder: (data)=>api.post(`/order`, data), // "product_no": 10500,"user_id": 1
}

export default apis;