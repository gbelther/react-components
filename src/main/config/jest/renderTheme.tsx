import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../presentation/styles/theme';

export const renderTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
