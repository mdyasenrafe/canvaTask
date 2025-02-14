import React from 'react';
import {Box, RemoteImage, Row, Screen, Text} from '../../../../components/atom';
import {Header} from '../../../../components/molecules';
import {GameBoardCard} from '../../../../components/organisms';

export const GameBoard = () => {
  return (
    <Screen name="GameBoard" expandToTopEdge>
      <Header />
      <Box px="xl" bg="softWhite" height={'100%'}>
        <GameBoardCard />
        <GameBoardCard />
      </Box>
    </Screen>
  );
};
