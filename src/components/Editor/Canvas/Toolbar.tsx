import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  Create,
  CropSquare,
  PanoramaFishEye,
  HorizontalRule,
  Save,
  DeleteOutline,
  StarOutline,
  HexagonOutlined,
  ChangeHistory,
} from '@mui/icons-material';
import { Brush } from '../../../tools/Brush';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  setTool,
  setColour,
  setWidth,
  clearCanvas,
} from '../../../store/slices/toolSlice';
import { selectCanvas } from '../../../store/slices/canvasSlice';
import { useState } from 'react';
import { Rectangle } from '../../../tools/Rectangle';
import { Circle } from '../../../tools/Circle';
import { Line } from '../../../tools/Line';
import { Star } from '../../../tools/Star';
import { Triangle } from '../../../tools/Triangle';
import { Polygon } from '../../../tools/Polygon';
import { ToolbarDiv, StyledButton } from '../editorstyles';
import { useAuth } from '../../../hooks/useAuth';
import { canvasService } from '../../../services/canvasService';
import { Error } from '../../general/ErrorToast/Error';

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const { canvas } = useAppSelector(selectCanvas);
  const { id, email } = useAuth();
  const [activeTool, setActiveTool] = useState('brush');
  const [colourValue, setColourValue] = useState('#111111');
  const [widthValue, setWidthValue] = useState(1);
  const widthSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  type Tools = Brush | Rectangle | Line | Circle | Triangle | Polygon | Star;

  const showError = (errMessage: string) => {
    setOpen(true);
    setErrorMessage(errMessage);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSaveImage = async () => {
    if (id == null || email == null) {
      showError('User is not defined');
      throw new SyntaxError('User is not defined');
    }
    try {
      await canvasService.saveImage(id!, email!, canvas.toDataURL());
      dispatch(clearCanvas());
    } catch {
      (err: Error) => showError(err.message);
    }
  };

  const chooseColour = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColourValue(event.target.value);
    dispatch(setColour(event.target.value));
  };

  const chooseWidth = (event: SelectChangeEvent<number>): void => {
    setWidthValue(Number(event.target.value));
    dispatch(setWidth(Number(event.target.value)));
  };

  const chooseTool = (tool: Tools, toolName: string) => {
    dispatch(setTool(tool));
    dispatch(setColour(colourValue));
    dispatch(setWidth(widthValue));
    setActiveTool(toolName);
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
      <Error
        errorMessage={errorMessage}
        open={open}
        handleClose={handleClose}
      />
      <StyledButton variant='contained' onClick={chooseBrush}>
        <Create />
      </StyledButton>
      <StyledButton variant='contained' onClick={chooseLine}>
        <HorizontalRule />
      </StyledButton>
      <StyledButton variant='contained' onClick={chooseCircle}>
        <PanoramaFishEye />
      </StyledButton>
      <StyledButton variant='contained' onClick={chooseRect}>
        <CropSquare />
      </StyledButton>
      <StyledButton variant='contained' onClick={chooseTriangle}>
        <ChangeHistory />
      </StyledButton>
      <StyledButton variant='contained' onClick={chooseStar}>
        <StarOutline />
      </StyledButton>
      <StyledButton variant='contained' onClick={choosePolygon}>
        <HexagonOutlined />
      </StyledButton>
      <StyledButton variant='contained'>
        <input value={colourValue} onChange={chooseColour} type='color' />
      </StyledButton>

      <Select
        style={{ height: '25px' }}
        value={widthValue}
        onChange={chooseWidth}
      >
        {widthSizes.map((width) => (
          <MenuItem key={width} value={width}>
            {width}px
          </MenuItem>
        ))}
      </Select>
      <StyledButton variant='contained' onClick={clear}>
        <DeleteOutline />
      </StyledButton>
      <StyledButton variant='contained' onClick={handleSaveImage}>
        <Save color='action' />
      </StyledButton>
    </ToolbarDiv>
  );
};

export { Toolbar };
