export const palette = {
  primary: '#145E94',
  neutral: '#B0AAAA',
  accentBlue: '#4774AD',
  softWhite: '#FCFAFA',
  black: '#000000',
  white: 'white',
  red: '#FF5757',
  grey: '#C1C1C1',
  lightGrey: '#EEEEEE',
  green: '#88EC65',
  deepBrown: '#210C0C',
};

export const BASE_COLORS = {
  primary: palette.primary,
  neutral: palette.neutral,
  accentBlue: palette.accentBlue,
  softWhite: palette.softWhite,
  black: palette.black,
  white: palette.white,
  red: palette.red,
  grey: palette.grey,
  lightGrey: palette.lightGrey,
  green: palette.green,
  deepBrown: palette.deepBrown,
};

export type TColor = keyof typeof palette;
