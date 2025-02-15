import React from 'react';
import {
  Box,
  Row,
  Screen,
  Text,
  TouchableOpacity,
} from '../../../../components/atom';
import {Header} from '../../../../components/molecules';
import {GameBoardCard} from '../../../../components/organisms';
import {ScrollView} from 'react-native';
import FilterIcon from '../../../../assets/icons/filterIcon.svg';
import DownIcon from '../../../../assets/icons/downIcon.svg';

export const GameBoard = () => {
  return (
    <Screen name="GameBoard" expandToTopEdge>
      <Header />
      <ScrollView>
        <Box bg="softWhite" height={'100%'}>
          <Row p="xl">
            <FilterIcon />
            <TouchableOpacity
              width={182}
              height={34}
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              px="lg"
              borderWidth={1}
              borderColor="lightGrey"
              borderRadius="full"
              ml="md">
              <Text>Date | hour...</Text>
              <DownIcon />
            </TouchableOpacity>
          </Row>
          <Box pt="md" borderTopWidth={1} borderTopColor="lightGrey" px="xl">
            <TouchableOpacity
              borderWidth={1}
              borderColor="primary"
              width={125}
              height={34}
              justifyContent="center"
              alignItems="center"
              borderRadius="full">
              <Text variant="p4" color="primary">
                Doubles games
              </Text>
            </TouchableOpacity>
          </Box>
          <Box p="xl">
            <GameBoardCard />
            <GameBoardCard />
            <GameBoardCard />
          </Box>
          <Box height={150} />
        </Box>
      </ScrollView>
    </Screen>
  );
};
