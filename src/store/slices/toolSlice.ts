import { createSlice } from '@reduxjs/toolkit';
import Brush from '../../tools/Brush';
import Circle from '../../tools/Circle';
import Rectangle from '../../tools/Rectangle';

interface ITool {
  tool: null | Brush | Rectangle | Circle;
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
