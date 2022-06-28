import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.font01};
    color: ${({ theme }) => theme.colors.dark01}
  }

  button {
    border-style: solid;
    cursor: pointer;
    transition: 0.3s;

    &:hover:not(:disabled) {
      filter: brightness(0.7);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
