import { keyframes } from '@mui/material';

const fadeInBck = keyframes`0% {
        -webkit-transform: translateZ(80px);
                transform: translateZ(80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
    }
    @keyframes fade-in-bck {
      0% {
        -webkit-transform: translateZ(80px);
                transform: translateZ(80px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }`;

export { fadeInBck };
