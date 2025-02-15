import React from 'react';
import {Box, Row, Text} from '../../../../atom';
import ShareIcon from '../../../../../assets/icons/shareIcon.svg';
import CalendarIcon from '../../../../../assets/icons/calenderIcon.svg';
import ClockIcon from '../../../../../assets/icons/clockIcon.svg';
import MessageIcon from '../../../../../assets/icons/messageIcon.svg';

export const GameBoardHeader = () => {
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
    <Box>
      <Row alignItems="center" justifyContent="space-between">
        <Text color="primary" variant="p3">
          Yarkon Park, Tel Aviv | Court #2
        </Text>
        <ShareIcon />
      </Row>
      <Row alignItems="center" mt="sm">
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
