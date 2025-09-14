import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name:"mycart",
  initialState:{
    cart:[]
  },
  reducers:{
     addTocart:(state, actions)=>{
      const status = state.cart.filter(key=>key.id==actions.payload.id);
      if(status.length>=1)
        {
       alert("Product Allready Added!");
      }
      else{
        state.cart.push(actions.payload);
      }
     },

     incQunty:(state, actions)=>{
      for(var i=0; i<state.cart.length; i++){
        if(state.cart[i].id == actions.payload.id){
          state.cart[i].qnty++;
        }
      }
     },

     decQunty:(state, actions)=>{
      for(var i=0; i<state.cart.length; i++){
        if(state.cart[i].id == actions.payload.id){
          if(state.cart[i].qnty<=1){
            alert("Quantity not less than 1");
          }
          else{
            state.cart[i].qnty--;
          }
        }
      }
     },

    cartDataRemove:(state, actions)=>{
         state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
    }
  }
})


export const {addTocart,incQunty, decQunty, cartDataRemove} = cartSlice.actions;
export default cartSlice.reducer;