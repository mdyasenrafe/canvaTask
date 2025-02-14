import React from 'react';
import {Box} from '../components/atom';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from './types';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
