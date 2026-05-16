import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Players } from '../pages/ui/players.tsx';
import { theme } from '../shared/theme/theme.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Players />
    </ThemeProvider>
  );
}

export { App };
