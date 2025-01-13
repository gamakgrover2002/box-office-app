// theme.js
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
const queryClient = new QueryClient();

function GlobalTheme({ children }) {
  return <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
    </ThemeProvider>;
}

export { GlobalTheme };
