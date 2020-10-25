import { createMuiTheme } from '@material-ui/core/styles';
import { grey, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: grey,
    secondary: pink,
  },
});

export default theme;
