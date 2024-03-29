import { keyframes } from '@mui/material';

const fadeInLeft = keyframes`
0% {
  -webkit-transform: translateX(-50px);
          transform: translateX(-50px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
}
@keyframes fade-in-left {
0% {
  -webkit-transform: translateX(-50px);
          transform: translateX(-50px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}`;

const fadeInRight = keyframes`0% {
  -webkit-transform: translateX(50px);
          transform: translateX(50px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
}
@keyframes fade-in-right {
0% {
  -webkit-transform: translateX(50px);
          transform: translateX(50px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}`;

export { fadeInLeft, fadeInRight };
