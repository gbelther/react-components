import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { GlobalStyles } from '@/presentation/styles/globalStyles';
import { theme } from '@/presentation/styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('main')
);
