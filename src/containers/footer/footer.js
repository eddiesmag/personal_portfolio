import React, { useState, useContext, useEffect } from 'react';
import { Box, Collapse, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import StyleContext from '../../contexts/StyleContext';

import './styles/footer.scss';

const Footer = () => {
  const [isInView, setIsInView] = useState(false);

  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : 'rgb(120, 131, 155)',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 3
      }}>
      <Collapse in={isInView} timeout={1000}>
        <Typography
          variant="subTitle1"
          sx={{
            ...getSubTitleStyles(),
            fontWeight: 'light',
            textTransform: 'capitalize'
          }}>
          all rights reserved
        </Typography>
      </Collapse>
    </Box>
  );
};

export default Footer;
