import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { App } from './app/app.tsx';
import { SearchProvider } from './features/search/model/search-context.tsx';
import { theme } from './shared/theme/theme.ts';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <CssBaseline />
        <App />
      </SearchProvider>
    </ThemeProvider>
  </StrictMode>
);
