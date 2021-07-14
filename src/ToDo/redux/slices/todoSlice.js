import { createSlice } from "@reduxjs/toolkit";

// console.log("  ");
// console.log("TODOSLICE.JS");

const initialState = {
  list: []
};

export const todoSlice = createSlice({
  name: "todo",
  //create state object (providing initial state)
  initialState,
  //define reducers
  reducers: {
    fetch: (_state) => {
      // state.list = [];
    },
    fetchSuccess: (state, action) => {
      state.list = action.payload;
    },
    add: (_state) => {
      // state.list=[];
    },
    delet: (_state) => {//alias for delete keyword!!
    },
    edit: (_state) => {
    },
    check: (_state)=>{
    }
  }
});
// console.log("reducer called");

export const { fetch, fetchSuccess, add , delet, edit, check} = todoSlice.actions;
// console.log("exported reducer functions");

export default todoSlice.reducer;
