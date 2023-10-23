import React, { useState, useEffect } from 'react';
import { NavigationOutlined } from '@mui/icons-material';
import { Box, Fab, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  toTop: {
    zIndex: 2,
    position: 'fixed',
    right: '3%',
    bottom: '2vh',
    backgroundColor: 'rgb(64, 123, 254)',
    color: '#fff',
    '&:hover, &.Mui-focusVisible': {
      transition: '0.3s',
      backgroundColor: 'rgb(0, 75, 196 )',
    },
  },
});
const ScrollTop = () => {
  const [show, setShow] = useState(false);

  const classes = useStyles();

  const handleOnClick = () => {
    window['scrollTo']({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box>
      {show && (
        <Slide appear={false} direction="down" in={true}>
          <Fab className={classes.toTop} size="medium" onClick={handleOnClick}>
            <NavigationOutlined aria-label="navigate top" />
          </Fab>
        </Slide>
      )}
    </Box>
  );
};

export default ScrollTop;
