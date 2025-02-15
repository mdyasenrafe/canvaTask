import React from 'react';
import {Box, RemoteImage, Row, Screen, Text} from '../../../../components/atom';
import {
  Header,
  NewsCard,
  NewsGradientCard,
  NewsSystemMessage,
} from '../../../../components/molecules';
import {ScrollView} from 'react-native';
import {palette} from '../../../../theme/elements';
import ClockIcon from '../../../../assets/icons/clockIcon.svg';
import NewsBanner from '../../../../assets/images/newsBanner.png';
import HorseIcon from '../../../../assets/images/horseLogo.png';
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
          <NewsGradientCard
            backgroundImage={NewsBanner}
            BrandIcon={
              <RemoteImage source={HorseIcon} style={{width: 71, height: 30}} />
            }
            title="Lorem Ipsum is a nickname for such a completely meaningless text"
            subtitle="Lorem Ipsum is"
            readingTime="4 minutes of reading"
          />
          <Box borderBottomWidth={1} borderBottomColor="lightGrey" pt={'xl'} />
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
          <NewsSystemMessage />
          <Box height={120} />
        </Box>
      </ScrollView>
    </Screen>
  );
};
