import {createBox} from '@shopify/restyle';

import {
  SafeAreaView as SA,
  SafeAreaViewProps as P,
} from 'react-native-safe-area-context';
import {ComponentProps} from 'react';
import {Theme} from '../../../theme';

export const SafeAreaView = createBox<Theme, P>(SA);
export type SafeAreaViewProps = ComponentProps<typeof SafeAreaView>;
