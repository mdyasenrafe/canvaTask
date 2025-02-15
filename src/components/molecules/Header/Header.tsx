import React from 'react';
import {Box, RemoteImage, Row, Text} from '../../atom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfilePic from '../../../assets/images/profilePic.png';

export const Header = () => {
  const {top} = useSafeAreaInsets();
  console.log(ProfilePic);

  return (
    <Box px="xl" bg="black" style={{paddingTop: top, paddingBottom: 12}}>
      <Row pt="xl">
        <Row
          justifyContent="center"
          alignItems="center"
          width={45}
          height={45}
          borderWidth={1}
          borderColor="accentBlue"
          borderRadius="full">
          <RemoteImage
            source={ProfilePic}
            style={{
              width: 40.71,
              height: 40.71,
              borderRadius: 100,
            }}
          />
        </Row>
        <Box ml="md">
          <Text color="white" variant="p4">
            Noam Penn (Panther)
          </Text>
          <Text color="neutral" variant="p5">
            a tennis player
          </Text>
        </Box>
      </Row>
    </Box>
  );
};
