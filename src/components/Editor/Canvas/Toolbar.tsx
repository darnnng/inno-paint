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
  return (
    <Grid style={toolbar} container>
      <Button variant='contained' style={toolbarBtn}>
        <CreateIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <HorizontalRuleIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <CropSquareIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <PanoramaFishEyeIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
        <input type='color' />
      </Button>

      <Button variant='contained' style={toolbarBtn}>
        <LineWeightIcon />
      </Button>
      <Button variant='contained' style={toolbarBtn}>
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
