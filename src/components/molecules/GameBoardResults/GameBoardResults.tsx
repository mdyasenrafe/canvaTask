import React from 'react';
import PlayerPic1 from '../../../assets/images/player1.png';
import PlayerPic2 from '../../../assets/images/player2.png';
import PlayerPic3 from '../../../assets/images/player3.png';
import PlayerPic4 from '../../../assets/images/player4.png';

import {Box, Row, Text} from '../../atom';
import {PlayerCard} from '../PlayerCard';
import {GameBoardHeader} from '../../organisms/GameBoardCard/components';

export const GameBoardResults: React.FC = () => {
  const leftTeam = [
    {source: PlayerPic3, name: 'Mandler T.', subtitle: '(PRO)'},
    {source: PlayerPic4, name: 'Oz Y.', subtitle: '(The Wiz)'},
  ];

  const rightTeam = [
    {source: PlayerPic1, name: 'Goren S.', subtitle: '(hard)'},
    {source: PlayerPic2, name: 'Penn N.', subtitle: '(panther)'},
  ];

  const scoreHeader = '1-3';
  const rounds = ['1 - 0', '1 - 2', '4 - 3'];

  return (
    <Box borderWidth={1.2} borderColor="lightGrey" borderRadius="lg" mt="xl">
      <Box borderBottomWidth={1} borderBottomColor="lightGrey" p="lg">
        <GameBoardHeader />
      </Box>
      <Row py="xl" justifyContent="center" width="100%">
        <Row alignItems="center" justifyContent="center" width="100%">
          {leftTeam.map((player, index) => (
            <PlayerCard
              key={index}
              source={player.source}
              name={player.name}
              subtitle={player.subtitle}
              borderColor="accentBlue"
              isLastItem={index === leftTeam.length - 1}
            />
          ))}
          <Box px="md">
            <Row width={48} justifyContent="center" alignItems="center" mb="sm">
              <Text variant="p2">{scoreHeader}</Text>
            </Row>
            {rounds.map((round, index) => (
              <Row
                key={index}
                width={48}
                height={20}
                borderWidth={1}
                borderColor="lightGrey"
                borderRadius="full"
                justifyContent="center"
                alignItems="center"
                mb={index !== rounds.length - 1 ? 'sm' : undefined}>
                <Text>{round}</Text>
              </Row>
            ))}
          </Box>
          {rightTeam.map((player, index) => (
            <PlayerCard
              key={index}
              source={player.source}
              name={player.name}
              subtitle={player.subtitle}
              borderColor="accentBlue"
              isLastItem={index === rightTeam.length - 1}
            />
          ))}
        </Row>
      </Row>
    </Box>
  );
};
