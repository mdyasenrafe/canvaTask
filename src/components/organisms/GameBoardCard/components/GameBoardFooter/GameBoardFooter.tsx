import React from 'react';
import {Box, Row, Text, TouchableOpacity} from '../../../../atom';
import PrecipitationIcon from '../../../../../assets/icons/precipitationIcon.svg';
import WeatherIcon from '../../../../../assets/icons/weatherIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {Platform, StyleSheet} from 'react-native';
import {MainStackScreenProps} from '../../../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

export const GameBoardFooter = () => {
  const navigation =
    useNavigation<MainStackScreenProps<'BottomTab'>['navigation']>();

  const handleNavigation = () => {
    navigation.navigate('Chat');
  };

  return (
    <Row
      justifyContent="space-between"
      borderTopWidth={1}
      borderTopColor="lightGrey">
      <Box width={'65%'} pl="lg" justifyContent="center">
        <Row alignItems="center">
          <PrecipitationIcon />
          <Text
            variant="p4"
            color="neutral"
            ml="sm"
            mb={Platform.OS == 'ios' ? 'xs' : 'none'}>
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
      <TouchableOpacity width={'35%'} onPress={handleNavigation}>
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
