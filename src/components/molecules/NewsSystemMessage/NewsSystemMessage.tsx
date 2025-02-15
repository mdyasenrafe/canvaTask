import React from 'react';
import {Box, Row, Text} from '../../atom';
import ShareIcon from '../../../assets/icons/shareIcon.svg';

export const NewsSystemMessage = () => {
  return (
    <Box
      borderWidth={1.2}
      borderColor="lightGrey"
      p="lg"
      borderRadius="lg"
      mt="xl">
      <Row justifyContent="space-between" alignItems="center">
        <Text>System message</Text>
        <ShareIcon />
      </Row>
      <Text>
        Lorem Ipsum is a term for a completely common meaningless text -
        sometimes also called Lorem Ipsum!
      </Text>
    </Box>
  );
};
