import React from 'react';
import {Box, RemoteImage, Row, Screen, Text} from '../../../../components/atom';
import {Header} from '../../../../components/molecules';
import {GameBoardCard} from '../../../../components/organisms';
import {ScrollView} from 'react-native';

export const GameBoard = () => {
  return (
    <Screen name="GameBoard" expandToTopEdge>
      <Header />
      <ScrollView>
        <Box px="xl" bg="softWhite" height={'100%'} pt="xl">
          <GameBoardCard />
          <GameBoardCard />
          <GameBoardCard />
          <Box height={120} />
        </Box>
      </ScrollView>
    </Screen>
  );
};
