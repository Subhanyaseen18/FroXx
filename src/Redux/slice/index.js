import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    isChangePassword: null,
    token: null,
  },
  reducers: {
    userdata:(state,action)=>{
    
      state.user = action.payload;
    },
    isChangePassword: (state, action) => {
     
      state.isChangePassword = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const {isChangePassword, updateToken,userdata} = userSlice.actions;

export const selectuser = state => state.user;

export default userSlice.reducer;
