import React from 'react';
import {Box, Row, Text} from '../../atom';
import ShareIcon from '../../../assets/icons/shareIcon.svg';
import ClockIcon from '../../../assets/icons/clockIcon.svg';
import {Platform} from 'react-native';

export const NewsSystemMessage = () => {
  const cardDetails = [
    {Icon: ClockIcon, iconProps: {width: 14, height: 14}, text: 'an hour ago'},
  ];
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
      <Text mt="xs" variant="p3">
        Lorem Ipsum is a term for a completely common meaningless text -
        sometimes also called Lorem Ipsum!
      </Text>
      <Row alignItems="center" mt={Platform.OS === 'ios' ? 'sm' : 'none'}>
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
  );
};
