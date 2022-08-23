import { configureStore, createSlice } from "@reduxjs/toolkit"
import cart from "./modules/cartSlice";

const user = createSlice({
    name: 'user',
    initialState: { user_id:1, alias: "은선" },
})


export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer,
    },
});