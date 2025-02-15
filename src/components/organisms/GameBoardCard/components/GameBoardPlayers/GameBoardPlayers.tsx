import React from 'react';
import ProfilePic1 from '../../../../../assets/images/profilePic.png';
import {Box, Row, Text} from '../../../../atom';
import {PlayerCard} from '../../../../molecules';

export const GameBoardPlayers: React.FC = () => {
  return (
    <Box p="lg">
      <Row alignItems="center" justifyContent="center" width="100%">
        <PlayerCard
          source={ProfilePic1}
          name="Mandler T."
          subtitle="(PRO)"
          borderColor="accentBlue"
        />
        <PlayerCard
          source={ProfilePic1}
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
