import { createSlice } from '@reduxjs/toolkit';
import Brush from '../../tools/Brush';
import Circle from '../../tools/Circle';
import Rectangle from '../../tools/Rectangle';
import Star from '../../tools/Star';

interface ITool {
  tool: null | Brush | Rectangle | Circle | Star | any;
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
    setColour(state, action) {
      state.tool.lineColour = action.payload;
    },
    setWidth(state, action) {
      state.tool.lineWidth = action.payload;
    },
    clearCanvas(state) {
      state.tool.clear();
    },
  },
});

export const { setTool, setColour, setWidth, clearCanvas } = toolSlice.actions;
export const selectTool = (state: any) => state.tool;
export default toolSlice.reducer;
