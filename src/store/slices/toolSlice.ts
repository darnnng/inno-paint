import { createSlice } from '@reduxjs/toolkit';
import Brush from '../../tools/Brush';

interface ITool {
  tool: null | Brush;
}

const initialState: ITool = {
  tool: null,
};

const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setTool(state, action) {
      return { tool: action.payload };
    },
  },
});

export const { setTool } = toolSlice.actions;
export const selectTool = (state: any) => state.tool;
export default toolSlice.reducer;
