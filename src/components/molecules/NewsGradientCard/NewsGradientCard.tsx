import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Box, Text, Row, RemoteImage} from '../../atom';
import ClockIcon from '../../../assets/icons/clockIconWhite.svg';

type NewsGradientCardProps = {
  backgroundImage: any;
  BrandIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  readingTime?: string;
};

export const NewsGradientCard: React.FC<NewsGradientCardProps> = ({
  backgroundImage,
  BrandIcon,
  title,
  subtitle,
  readingTime,
}) => {
  return (
    <Box borderRadius="md" overflow="hidden" position="relative">
      <RemoteImage source={backgroundImage} style={styles.backgroundImage} />

      <Box position="absolute" top={0} left={0} right={0} bottom={0}>
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
          start={{x: 0.5, y: 0.25}}
          end={{x: 0.5, y: 1}}
          style={StyleSheet.absoluteFillObject}>
          <Box flex={1} p="md" justifyContent="space-between">
            <Row>{BrandIcon && BrandIcon}</Row>
            <Box>
              <Text variant="p3" color="white" mb="xs">
                {title}
              </Text>
              <Row
                alignItems="center"
                mt={Platform.OS === 'ios' ? 'xs' : 'none'}>
                <Text variant="p4" color="white">
                  {subtitle}
                </Text>
                <Box
                  width={4}
                  height={4}
                  bg="white"
                  borderRadius="full"
                  mx="s"
                />
                {readingTime && (
                  <Text variant="p4" color="white" pr="xs">
                    {readingTime}
                  </Text>
                )}
                <ClockIcon />
              </Row>
            </Box>
          </Box>
        </LinearGradient>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 200,
  },
});
