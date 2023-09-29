import { Button } from '@mui/material';
import React from 'react';
const ButtonComp = ({ text, href, newTab, btnSize }) => {
  return (
    <Button
      variant="contained"
      href={href}
      target={newTab && '_blank'}
      size={btnSize}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
