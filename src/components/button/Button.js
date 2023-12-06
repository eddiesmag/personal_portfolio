import React, { useContext } from 'react';
import { Button } from '@mui/material';
import StyleContext from '../../contexts/StyleContext';

const ButtonComp = ({ text, href, newTab, btnSize }) => {
  const { isDark } = useContext(StyleContext);
  return (
    <Button
      variant="contained"
      href={href}
      target={newTab && '_blank'}
      size={btnSize}
      sx={{
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
        '&:hover': {
          transition: 0.3,
          bgcolor: isDark ? 'primary.dark' : 'primary.light',
          boxShadow: 5
        }
      }}>
      {text}
    </Button>
  );
};

export default ButtonComp;
