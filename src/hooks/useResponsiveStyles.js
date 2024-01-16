import { useMediaQuery } from '@mui/material';
import { useContext } from 'react';

import StyleContext from '../contexts/StyleContext';

export const useResponsiveStyles = () => {
  //  user's them mode preference
  const { isDark } = useContext(StyleContext);

  //    break points
  const isSmallScreen = useMediaQuery('(max-width: 767.98px)');
  const isMediumScreen = useMediaQuery('(max-width: 991.98px)');

  //    Tabs(nav) styles
  const getTabStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : '#181b20',
        textAlign: 'justify',
        lineHeight: 1.1,
        fontSize: '0.7rem'
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : '#181b20',
        textAlign: 'justify',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    } else {
      return {
        color: isDark ? 'inherit' : '#181b20',
        // textAlign: 'justify',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
  };

  //    title styles
  const getTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? '#fff' : '#181b20',
        fontSize: '1.7rem',
        lineHeight: 1
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? '#fff' : '#181b20',
        fontSize: '2rem',
        lineHeight: 1
      };
    } else {
      return {
        color: isDark ? '#fff' : '#181b20',
        fontSize: '3rem',
        lineHeight: 1.1
      };
    }
  };

  //    Subtitle styles
  const getSubTitleStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : '#23272f',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : '#23272f)',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : '#23272f',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };

  //   body styles
  const getBodyStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : '#4f5258',
        textAlign: 'justify',
        lineHeight: 1.1,
        fontSize: '0.7rem'
      };
    } else if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : '#4f5258',
        textAlign: 'justify',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    } else {
      return {
        color: isDark ? 'inherit' : '#4f5258',
        // textAlign: 'justify',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
  };

  //    Buttons styles
  const getButtonStyles = () => {
    if (isSmallScreen || isMediumScreen) {
      return {
        justifyContent: 'center',
        alignItems: 'center'
      };
    }
    return {
      justifyContent: 'flex-start',
      alignItems: 'center'
    };
  };

  //    icons styles
  const getIconStyles = () => {
    if (isSmallScreen) {
      return '1x';
    }
    if (isMediumScreen) {
      return '2x';
    }

    return '3x';
  };

  //  chip styles
  const getChipStyles = () => {
    if (isSmallScreen) {
      return {
        color: isDark ? 'inherit' : 'secondary.light',
        lineHeight: 1.2,
        fontSize: '0.8rem'
      };
    }
    if (isMediumScreen) {
      return {
        color: isDark ? 'inherit' : 'secondary.light',
        lineHeight: 1.5,
        fontSize: '1rem'
      };
    }
    return {
      color: isDark ? 'inherit' : 'secondary.light',
      lineHeight: 1.6,
      fontSize: '1.1rem'
    };
  };
  return {
    getTitleStyles,
    getSubTitleStyles,
    getBodyStyles,
    getButtonStyles,
    getTabStyles,
    getIconStyles,
    getChipStyles
  };
};
