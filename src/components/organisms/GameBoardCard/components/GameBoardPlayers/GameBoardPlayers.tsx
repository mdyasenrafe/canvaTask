import React from 'react';
import PlayerPic1 from '../../../../../assets/images/player1.png';
import PlayerPic2 from '../../../../../assets/images/player2.png';
import {Box, Row, Text} from '../../../../atom';
import {PlayerCard} from '../../../../molecules';

export const GameBoardPlayers: React.FC = () => {
  return (
    <Box p="lg">
      <Row alignItems="center" justifyContent="center" width="100%">
        <PlayerCard
          source={PlayerPic1}
          name="Mandler T."
          subtitle="(PRO)"
          borderColor="accentBlue"
        />
        <PlayerCard
          source={PlayerPic2}
          name="Oz Y."
          subtitle="(The Wiz)"
          borderColor="accentBlue"
          isLastItem={false}
        />
        <Text fontSize={21} fontFamily="regular" px="sm" color="primary">
          vs.
        </Text>
        <PlayerCard
          name="player"
          subtitle="(nickname)"
          borderColor="primary"
          isPlaceholder
        />
        <PlayerCard
          name="player"
          subtitle="(nickname)"
          borderColor="primary"
          isPlaceholder
          isLastItem={false}
        />
      </Row>
    </Box>
  );
};
