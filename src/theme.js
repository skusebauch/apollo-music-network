import { createMuiTheme } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;
