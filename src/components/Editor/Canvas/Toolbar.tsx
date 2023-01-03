import React from 'react';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Brush from '../../../tools/Brush';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  setTool,
  setColour,
  setWidth,
  clearCanvas,
} from '../../../store/slices/toolSlice';
import { selectCanvas } from '../../../store/slices/canvasSlice';
import { useState } from 'react';
import Rectangle from '../../../tools/Rectangle';
import Circle from '../../../tools/Circle';
import Line from '../../../tools/Line';

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
  const [activeTool, setActiveTool] = useState('brush');
  const [colourValue, setColourValue] = useState('#111111');
  const [widthValue, setWidthValue] = useState(1);
  const widthSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const chooseColour = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColourValue(event.target.value);
    dispatch(setColour(event.target.value));
  };

  const chooseWidth = (event: SelectChangeEvent<number>): void => {
    setWidthValue(Number(event.target.value));
    dispatch(setWidth(Number(event.target.value)));
  };

  const chooseTool = (tool: any, value: string) => {
    dispatch(setTool(tool));
    dispatch(setColour(colourValue));
    dispatch(setWidth(widthValue));
    console.log(colourValue, tool);
    setActiveTool(value);
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

  const clear = () => {
    dispatch(clearCanvas());
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
        <input value={colourValue} onChange={chooseColour} type='color' />
      </Button>

      <Select
        style={{ height: '25px' }}
        value={widthValue}
        onChange={chooseWidth}
      >
        {widthSizes.map((i) => (
          <MenuItem key={i} value={i}>
            {i}px
          </MenuItem>
        ))}
      </Select>
      <Button variant='contained' style={toolbarBtn} onClick={clear}>
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
