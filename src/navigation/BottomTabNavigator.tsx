import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './types';
import {palette} from '../theme/elements';
import {StyleSheet} from 'react-native';
import {Box} from '../components/atom/Box';
import {Text} from '../components/atom/Text';
import {GameBoard, News, Rank, Register} from '../screens/main/bottomTab';

// SVG Imports (renamed for clarity)
import NewsIcon from '../assets/icons/bottomTab/NewsIcon.svg';
import NewsIconFocused from '../assets/icons/bottomTab/NewsIcon.svg';
import RankIcon from '../assets/icons/bottomTab/rankIcon.svg';
import RankIconFocused from '../assets/icons/bottomTab/rankIcon.svg';
import RegisterIcon from '../assets/icons/bottomTab/registerIcon.svg';
import RegisterIconFocused from '../assets/icons/bottomTab/registerIcon.svg';
import GameBoardIcon from '../assets/icons/bottomTab/gameBoardIcon.svg';
import GameBoardIconFocused from '../assets/icons/bottomTab/gameBoardIcon.svg';

type RouteName = keyof MainBottomTabParamList;

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

type TabBarLabelProps = {
  name: string;
};

const TabBarLabel: React.FC<TabBarLabelProps> = ({name}) => (
  <Text fontSize={14} color="white">
    {name}
  </Text>
);

export function BottomTabNavigator() {
  const renderIcon = (routeName: RouteName, focused: boolean) => {
    let iconElement;
    const size = 19;

    switch (routeName) {
      case 'News':
        iconElement = focused ? (
          <NewsIconFocused height={size} />
        ) : (
          <NewsIcon height={size} />
        );
        break;
      case 'Rank':
        iconElement = focused ? (
          <RankIconFocused height={size} />
        ) : (
          <RankIcon height={size} />
        );
        break;
      case 'Register':
        iconElement = focused ? (
          <RegisterIconFocused height={size} />
        ) : (
          <RegisterIcon height={size} />
        );
        break;
      case 'GameBoard':
        iconElement = focused ? (
          <GameBoardIconFocused height={size} />
        ) : (
          <GameBoardIcon height={size} />
        );
        break;
      default:
        iconElement = null;
    }

    return <Box>{iconElement}</Box>;
  };

  const tabScreenOptions = ({
    route,
  }: BottomTabScreenProps<MainBottomTabParamList>): BottomTabNavigationOptions => {
    return {
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabBarItem,
      tabBarIcon: ({focused}) => renderIcon(route.name as RouteName, focused),
      tabBarLabel: () => <TabBarLabel name={route.name} />,
    };
  };

  return (
    <BottomTab.Navigator
      initialRouteName="GameBoard"
      screenOptions={tabScreenOptions}>
      <BottomTab.Screen name="Register" component={Register} />
      <BottomTab.Screen name="GameBoard" component={GameBoard} />
      <BottomTab.Screen name="Rank" component={Rank} />
      <BottomTab.Screen name="News" component={News} />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: palette.black,
    borderColor: palette.black,
    height: 120,
    borderTopWidth: 2,
    borderTopColor: '#EEEEEE',
  },
  tabBarItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
