import React from 'react';
import PlayerPic1 from '../../../assets/images/player1.png';
import PlayerPic2 from '../../../assets/images/player2.png';
import PlayerPic3 from '../../../assets/images/player3.png';
import PlayerPic4 from '../../../assets/images/player4.png';

import {Box, Row, Text} from '../../atom';
import {PlayerCard} from '../PlayerCard';
import {GameBoardHeader} from '../../organisms/GameBoardCard/components';

export const GameBoardResults: React.FC = () => {
  return (
    <Box borderWidth={1.2} borderColor="lightGrey" borderRadius="lg" mt="xl">
      <Box borderBottomWidth={1} borderBottomColor="lightGrey" p="lg">
        <GameBoardHeader />
      </Box>
      <Row py="xl" justifyContent="center" width={'100%'}>
        <Row alignItems="center" justifyContent="center" width="100%">
          <PlayerCard
            source={PlayerPic3}
            name="Mandler T."
            subtitle="(PRO)"
            borderColor="accentBlue"
          />
          <PlayerCard
            source={PlayerPic4}
            name="Oz Y."
            subtitle="(The Wiz)"
            borderColor="accentBlue"
            isLastItem={true}
          />
          <Box px="md">
            <Row width={48} justifyContent="center" alignItems="center" mb="sm">
              <Text variant="p2">1-3</Text>
            </Row>
            <Row
              width={48}
              height={20}
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius="full"
              justifyContent="center"
              alignItems="center"
              mb="sm">
              <Text>1 - 0</Text>
            </Row>
            <Row
              width={48}
              height={20}
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius="full"
              justifyContent="center"
              alignItems="center"
              mb="sm">
              <Text>1 - 0</Text>
            </Row>
            <Row
              width={48}
              height={20}
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius="full"
              justifyContent="center"
              alignItems="center">
              <Text>1 - 0</Text>
            </Row>
          </Box>
          <PlayerCard
            source={PlayerPic1}
            name="Goren S."
            subtitle="(hard)"
            borderColor="accentBlue"
          />
          <PlayerCard
            source={PlayerPic2}
            name="Penn N."
            subtitle="(panther)"
            borderColor="accentBlue"
            isLastItem={true}
          />
        </Row>
      </Row>
    </Box>
  );
};
