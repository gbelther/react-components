import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../src/presentation/styles/theme';
import { GlobalStyles } from '../../../src/presentation/styles/globalStyles';

type SbContainerProps = {
  children: ReactNode;
};

export function SbContainer({ children }: SbContainerProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
