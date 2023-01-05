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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Brush from '../../../tools/Brush';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
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
import Star from '../../../tools/Star';
import Triangle from '../../../tools/Triangle';
import Polygon from '../../../tools/Polygon';
import { ToolbarDiv, toolbarBtn } from '../editorstyles';

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

  const chooseTool = (tool: any, toolName: string) => {
    dispatch(setTool(tool));
    dispatch(setColour(colourValue));
    dispatch(setWidth(widthValue));
    setActiveTool(toolName);
    console.log(tool);
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

  const chooseStar = () => {
    chooseTool(new Star(canvas), 'star');
  };

  const chooseTriangle = () => {
    chooseTool(new Triangle(canvas), 'triangle');
  };

  const choosePolygon = () => {
    chooseTool(new Polygon(canvas), 'polygon');
  };

  return (
    <ToolbarDiv>
      <Button variant='contained' style={toolbarBtn} onClick={chooseBrush}>
        <CreateIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseLine}>
        <HorizontalRuleIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseCircle}>
        <PanoramaFishEyeIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseRect}>
        <CropSquareIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseTriangle}>
        <ChangeHistoryIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={chooseStar}>
        <StarOutlineIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn} onClick={choosePolygon}>
        <HexagonOutlinedIcon />
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
    </ToolbarDiv>
  );
};

export { Toolbar };
