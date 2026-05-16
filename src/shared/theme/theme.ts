import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    divider: '#E0E0E0',
  },
  shape: {
    borderRadius: 6,
  },
});

export { theme };
