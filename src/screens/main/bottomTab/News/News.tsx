import React from 'react';
import {Box, Row, Screen, Text} from '../../../../components/atom';
import {Header} from '../../../../components/molecules';
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
          <Box py="lg" borderBottomWidth={1} borderColor="lightGrey">
            <Text color="primary" variant="p4">
              News
            </Text>
            <Text>
              Lorem Ipsum is a term for a completely meaningless text -
              sometimes read
            </Text>
            <Row alignItems="center">
              {cardDetails.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <Row
                    key={index}
                    alignItems="center"
                    pr={index < cardDetails.length - 1 ? 'md' : 'none'}>
                    <IconComponent {...item.iconProps} />
                    <Text ml="s" variant="p4" color="neutral">
                      {item.text}
                    </Text>
                  </Row>
                );
              })}
            </Row>
          </Box>
          <Box py="lg" borderBottomWidth={1} borderColor="lightGrey">
            <Text color="primary" variant="p4">
              News
            </Text>
            <Text>
              Lorem Ipsum is a term for a completely meaningless text -
              sometimes read
            </Text>
            <Row alignItems="center">
              {cardDetails.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <Row
                    key={index}
                    alignItems="center"
                    pr={index < cardDetails.length - 1 ? 'md' : 'none'}>
                    <IconComponent {...item.iconProps} />
                    <Text ml="s" variant="p4" color="neutral">
                      {item.text}
                    </Text>
                  </Row>
                );
              })}
            </Row>
          </Box>
          <Box height={120} />
        </Box>
      </ScrollView>
    </Screen>
  );
};
