import { createSlice } from '@reduxjs/toolkit';

interface ICanvas {
  canvas: null | HTMLCanvasElement;
}

const initialState: ICanvas = {
  canvas: null,
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setCanvas(state, action) {
      return { canvas: action.payload };
    },
  },
});

export const { setCanvas } = canvasSlice.actions;
export const selectCanvas = (state: any) => state.canvas;
export default canvasSlice.reducer;
