import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY = '#f1c232'; 
const HOVER = '#F5D46F';

// const SCREEN_SIZES = {
//   extraSmall: 480,
//   small: 840,
//   medium: 992,
//   alertBreakPoint: 1050,
//   large: 1200,
//   wide: 1600,
// };


const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY,
      hoverLight: HOVER,
      hoverDark: '#937F42',
    },
  },
});
console.log(theme);
export default theme;
