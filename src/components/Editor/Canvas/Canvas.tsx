import React from 'react';
import { Grid } from '@mui/material';
import { useRef, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setCanvas } from '../../../store/slices/canvasSlice';
import Brush from '../../../tools/Brush';
import { setTool } from '../../../store/slices/toolSlice';
import { canvasBoard } from '../editorstyles';

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (canvasRef.current) {
      dispatch(setCanvas(canvasRef.current));
      dispatch(setTool(new Brush(canvasRef.current)));
    }
  }, []);

  return (
    <Grid
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <canvas ref={canvasRef} style={canvasBoard} width={950} height={550} />
    </Grid>
  );
};

export { Canvas };
