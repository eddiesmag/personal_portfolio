import { createTheme } from '@mui/material';
/** color palette
 *** primary colors
 * dark #0047b2
 * main #0066FF
 * light #3384ff
 *
 *** secondary colors
 * dark #181b20
 * main #23272f
 * light #4f5258
 */
export const custTheme = createTheme({
  palette: {
    common: { white: '#FFF', black: '#000' },
    primary: { main: '#0066FF' },
    secondary: { main: '#23272f' }
  }
});
