import React, { useContext } from 'react';
import { introduction } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';
import { Grid, Skeleton, Typography, useMediaQuery } from '@mui/material';
import './splashScreen.scss';
const SplashScreen = () => {
  const { isDark } = useContext(StyleContext);

  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');

  const variants = ['h1', 'h3', 'body1', 'caption'];
  return (
    <div className={isDark ? 'dark-mode splash-container' : 'splash-container'}>
      <Grid container spacing={8} sx={{ maxWidth: isSmallScreen ? 300 : 600 }}>
        <Grid item xs>
          {variants.map((variant) => (
            <Typography component="div" key={variant} variant={variant}>
              <Skeleton sx={{ bgcolor: isDark ? 'grey.600' : 'grey.100' }} />
            </Typography>
          ))}
          <Typography
            component="div"
            variant="button"
            className="splash-titles-container"
          >
            <Skeleton variant="text" className="splash-title">
              &lt; {introduction.username} / &gt;
            </Skeleton>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default SplashScreen;
