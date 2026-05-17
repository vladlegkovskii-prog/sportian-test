import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from '@tanstack/react-query';
import { Players } from '../pages/ui/players.tsx';
import { queryClient } from '../shared/api/query-client.ts';
import { theme } from '../shared/theme/theme.ts';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Players />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

App.displayName = 'App';
export { App };
