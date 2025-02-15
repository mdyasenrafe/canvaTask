import React from 'react';
import {Box} from '../../atom';
import {GameBoardFooter, GameBoardHeader, GameBoardPlayers} from './components';

export const GameBoardCard = () => {
  return (
    <Box borderRadius="md" borderWidth={1.2} borderColor="lightGrey" mb="xl">
      <GameBoardHeader />
      <GameBoardPlayers />
      <GameBoardFooter />
    </Box>
  );
};
