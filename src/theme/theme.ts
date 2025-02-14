import {createTheme} from '@shopify/restyle';
import {
  BASE_BORDER_RADII,
  BASE_COLORS,
  BASE_SPACING,
  BASE_TEXT_VARIANTS,
} from './elements';

export const lightTheme = createTheme({
  colors: {
    ...BASE_COLORS,
    background: BASE_COLORS.white,
    text: BASE_COLORS.secondary,
    placeholder: 'grey',
  },
  spacing: BASE_SPACING,
  textVariants: BASE_TEXT_VARIANTS,
  borderRadii: BASE_BORDER_RADII,
  textInputVariants: {
    defaults: {
      color: 'black',
    },
    rounded: {
      borderRadius: 'roundedInput',
    },
  },
  snackbarVariants: {
    defaults: {},
    error: {
      backgroundColor: 'red',
    },
    success: {
      backgroundColor: 'green',
    },
  },
  mentionInputVariants: {
    defaults: {
      borderRadius: 'smallRoundedInput',
      borderColor: 'red',
      borderWidth: 1,
      px: 'md',
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...BASE_COLORS,
    primary: BASE_COLORS.secondary,
    background: BASE_COLORS.black,
    text: BASE_COLORS.white,
    placeholder: 'white',
  },
  spacing: BASE_SPACING,
  textVariants: BASE_TEXT_VARIANTS,
  borderRadii: BASE_BORDER_RADII,
  textInputVariants: {
    defaults: {
      color: 'white',
    },
    rounded: {
      borderRadius: 'roundedInput',
      borderColor: '',
    },
  },
  snackbarVariants: {
    defaults: {},
    error: {
      backgroundColor: 'red',
    },
    success: {
      backgroundColor: 'green',
    },
  },
  mentionInputVariants: {
    defaults: {
      borderRadius: 'smallRoundedInput',
      borderColor: 'red',
      borderWidth: 1,
      px: 'md',
    },
  },
});

export type Theme = typeof lightTheme;
