import React from 'react';
import { Button } from '@mui/material';

import './button.scss';

const ButtonComp = ({ text, href, newTab, btnSize }) => {
  return (
    <Button
      variant="contained"
      href={href}
      target={newTab && '_blank'}
      size={btnSize}
      sx={{ bgcolor: 'rgb(64, 123, 254)' }}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
