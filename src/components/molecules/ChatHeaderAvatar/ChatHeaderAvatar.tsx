import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Box, RemoteImage} from '../../../components/atom';

type AvatarProps = {
  source: ImageSourcePropType;
};

export const ChatHeaderAvatar: React.FC<AvatarProps> = ({source}) => (
  <Box mr="md" position="relative">
    <RemoteImage
      source={source}
      style={{
        width: 32,
        height: 32,
        borderRadius: 30,
      }}
    />
    <Box
      width={9}
      height={9}
      bg="green"
      borderRadius="full"
      position="absolute"
      bottom={0}
      right={0}
    />
  </Box>
);
