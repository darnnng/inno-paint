import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailList: [],
};

const emailListSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    setEmailList(state, action) {
      return { ...state, emailList: action.payload };
    },
  },
});

export const { setEmailList } = emailListSlice.actions;
export const selectEmailList = (state: any) => state.emailList;
export default emailListSlice.reducer;
