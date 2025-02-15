import React from 'react';
import {Box, Row, Screen, Text} from '../../../../components/atom';
import {Header, NewsCard} from '../../../../components/molecules';
import {ScrollView} from 'react-native';
import {palette} from '../../../../theme/elements';
import ClockIcon from '../../../../assets/icons/clockIcon.svg';
import MessageIcon from '../../../../assets/icons/messageIcon.svg';

export const News = () => {
  const cardDetails = [
    {Icon: ClockIcon, iconProps: {width: 14, height: 14}, text: 'an hour ago'},
    {Icon: MessageIcon, iconProps: {}, text: '26 comments'},
  ];
  return (
    <Screen name="News" expandToTopEdge>
      <Header />
      <ScrollView
        style={{
          backgroundColor: palette.softWhite,
          height: '100%',
        }}>
        <Box p="xl">
          <NewsCard
            title="News"
            description="Lorem Ipsum is a term for a completely meaningless text - sometimes read"
            cardDetails={cardDetails}
          />
          <NewsCard
            title="News"
            description="Lorem Ipsum is a term for a completely meaningless text - sometimes read"
            cardDetails={cardDetails}
          />
          <Box height={120} />
        </Box>
      </ScrollView>
    </Screen>
  );
};
