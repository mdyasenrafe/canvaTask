import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  BottomTab: MainBottomTabParamList;
  Chat: undefined;
};

export type MainBottomTabParamList = {
  Register: undefined;
  GameBoard: undefined;
  Rank: undefined;
  News: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;

export type MainBottomTabScreenProps<T extends keyof MainBottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainBottomTabParamList, T>,
    MainStackScreenProps<keyof MainStackParamList>
  >;
