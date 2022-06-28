import { SbContainer } from '../storybook/configs/components/SbContainer';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <SbContainer>
      <Story />
    </SbContainer>
  ),
];
