import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, Platform, StatusBarStyle, ViewStyle} from 'react-native';
import {Edge} from 'react-native-safe-area-context';
import {SafeAreaView} from '../SafeAreaView';

type ScreenProps = {
  children: React.ReactNode;
  name: string;
  expandToTopEdge?: boolean;
  expandToBottomEdge?: boolean;
  statusBarStyle?: StatusBarStyle;
  style?: ViewStyle;
};
export const Screen: React.FC<ScreenProps> = ({
  children,
  expandToTopEdge,
  expandToBottomEdge,
  statusBarStyle = 'default',
  style,
  name,
}) => {
  let edges: Edge[] = ['right', 'left'];
  if (!expandToTopEdge) {
    edges.push('top');
  }
  if (expandToBottomEdge === false) {
    edges.push('bottom');
  }

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(statusBarStyle);
      if (expandToTopEdge && Platform.OS === 'android') {
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setTranslucent(true);
      }
    }, [expandToTopEdge, statusBarStyle]),
  );

  return <SafeAreaView edges={edges}>{children}</SafeAreaView>;
};
