import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

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
    grey: {
      darker: grey[700],
      dark: grey[600],
      main: grey[500],
      light: grey[400],
      lighter: grey[300],
      lighterst: grey[200],

    }
  },
});
console.log(theme);
export default theme;
