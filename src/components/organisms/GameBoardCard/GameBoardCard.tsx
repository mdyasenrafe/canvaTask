import React from 'react';
import {Box, Row, Text, TouchableOpacity} from '../../atom';
import CalendarIcon from '../../../assets/icons/calenderIcon.svg';
import ClockIcon from '../../../assets/icons/clockIcon.svg';
import MessageIcon from '../../../assets/icons/messageIcon.svg';
import PrecipitationIcon from '../../../assets/icons/precipitationIcon.svg';
import WeatherIcon from '../../../assets/icons/weatherIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

export const GameBoardCard = () => {
  const cardDetails = [
    {
      Icon: CalendarIcon,
      iconProps: {width: 16, height: 16},
      text: '02/24/2023',
    },
    {Icon: ClockIcon, iconProps: {}, text: '14:00'},
    {Icon: MessageIcon, iconProps: {}, text: '26 messages'},
  ];

  return (
    <Box borderRadius="md" borderWidth={1.2} borderColor="lightGrey" mb="xl">
      <Box p="lg">
        <Text color="primary" variant="p3">
          Yarkon Park, Tel Aviv | Court #2
        </Text>
        <Row alignItems="center">
          {cardDetails.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <Row
                key={index}
                alignItems="center"
                pr={index < cardDetails.length - 1 ? 'md' : undefined}>
                <IconComponent {...item.iconProps} />
                <Text ml="s" variant="p4" color="neutral">
                  {item.text}
                </Text>
              </Row>
            );
          })}
        </Row>
      </Box>
      <Row
        justifyContent="space-between"
        borderTopWidth={1}
        borderTopColor="lightGrey">
        <Box width={'65%'} pl="lg" justifyContent="center">
          <Row alignItems="center">
            <PrecipitationIcon />
            <Text variant="p4" color="neutral" ml="sm">
              25% Precipitation
            </Text>
          </Row>
          <Row alignItems="center">
            <WeatherIcon />
            <Text variant="p4" color="neutral" ml="sm">
              Weather - cloudy
            </Text>
          </Row>
        </Box>
        <TouchableOpacity width={'35%'}>
          <LinearGradient
            colors={['#34506D', '#3498DB']}
            start={{x: 1, y: 0.5}}
            end={{x: 0, y: 0.5}}
            style={styles.gradientBtn}>
            <Text variant="p3_medium" color="white">
              Chat
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Row>
    </Box>
  );
};

const styles = StyleSheet.create({
  gradientBtn: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    width: '100%',
  },
});
