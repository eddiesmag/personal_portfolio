import { Box, Collapse, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useResponsiveStyles } from '../../hooks/useResponsiveStyles';

import './styles/footer.scss';

const Footer = () => {
  const [isInView, setIsInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  const { getSubTitleStyles } = useResponsiveStyles();

  const subTitleStyles = getSubTitleStyles();
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
            ...subTitleStyles,
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
