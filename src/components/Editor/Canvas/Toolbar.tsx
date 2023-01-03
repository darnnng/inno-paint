import React from 'react';
import { Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Brush from '../../../tools/Brush';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { setTool } from '../../../store/slices/toolSlice';
import { selectCanvas } from '../../../store/slices/canvasSlice';
import { useState } from 'react';
import Rectangle from '../../../tools/Rectangle';
import Circle from '../../../tools/Circle';
import Line from '../../../tools/Line';
import Eraser from '../../../tools/Eraser';

const toolbar: any = {
  height: '45px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '20px',
  left: '23.7%',
  width: '800px',
  margin: 'auto',
  boxShadow: '0 4px 5px gray',
  justifyContent: 'space-between',
  paddingLeft: '10px',
  paddingRight: '10px',
  color: 'black',
  borderRadius: '10px',
};

const toolbarBtn: any = {
  width: '15px',
  height: '25px',
  backgroundColor: 'white',
  color: 'black',
};

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const { canvas } = useAppSelector(selectCanvas);
  const [activeTool, setActiveTool] = useState<string>('brush');

  const chooseTool = (tool: any, value: any) => {
    dispatch(setTool(tool));
    setActiveTool(value);
    console.log(activeTool);
  };

  const chooseBrush = () => {
    chooseTool(new Brush(canvas), 'brush');
  };

  const chooseRect = () => {
    chooseTool(new Rectangle(canvas), 'rectangle');
  };

  const chooseCircle = () => {
    chooseTool(new Circle(canvas), 'circle');
  };

  const chooseLine = () => {
    chooseTool(new Line(canvas), 'line');
  };

  const chooseEraser = () => {
    chooseTool(new Eraser(canvas), 'eraser');
  };

  return (
    <Grid style={toolbar} container>
      <Button variant='contained' style={toolbarBtn} onClick={chooseBrush}>
        <CreateIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseLine}>
        <HorizontalRuleIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseRect}>
        <CropSquareIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseCircle}>
        <PanoramaFishEyeIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <input type='color' />
      </Button>

      <Button variant='contained' style={toolbarBtn}>
        <LineWeightIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseEraser}>
        <DeleteOutlineIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <SaveIcon color='action' />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <UndoIcon color='action' />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <RedoIcon color='action' />
      </Button>
    </Grid>
  );
};

export { Toolbar };
