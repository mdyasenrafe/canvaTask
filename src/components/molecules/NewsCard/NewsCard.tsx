import React from 'react';
import {Box, RemoteImage, Row, Text} from '../../atom';
import PlayerPic from '../../../assets/images/player.png';

type CardDetail = {
  Icon: React.FC<any>;
  iconProps?: any;
  text: string;
};

type NewsCardProps = {
  title: string;
  description: string;
  cardDetails: CardDetail[];
};

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  cardDetails,
}) => {
  return (
    <Box py="lg" borderBottomWidth={1} borderColor="lightGrey">
      <Row justifyContent="space-between" alignItems="center">
        <Box width={'70%'}>
          <Text color="primary" variant="p4">
            {title}
          </Text>
          <Text>{description}</Text>
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
        <Box width={'25%'}>
          <RemoteImage
            source={PlayerPic}
            style={{
              width: '100%',
              height: 84,
              borderRadius: 12,
            }}
          />
        </Box>
      </Row>
    </Box>
  );
};
