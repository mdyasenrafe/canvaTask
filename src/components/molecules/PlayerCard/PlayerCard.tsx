import React from 'react';
import {Box, Row, Text, RemoteImage} from '../../atom';
import PlusIcon from '../../../assets/icons/plusIcon.svg';
import {TColor} from '../../../theme/elements';

interface PlayerCardProps {
  source?: any;
  name: string;
  subtitle: string;
  borderColor: TColor;
  isPlaceholder?: boolean;
  isLastItem?: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  source,
  name,
  subtitle,
  borderColor,
  isLastItem = false,
  isPlaceholder = false,
}) => {
  return (
    <Box pr={isLastItem ? 'none' : 'sm'}>
      <Row
        justifyContent="center"
        alignItems="center"
        width={57}
        height={57}
        borderWidth={1}
        borderColor={borderColor}
        borderRadius="full"
        borderStyle={isPlaceholder ? 'dotted' : 'solid'}>
        {isPlaceholder ? (
          <PlusIcon />
        ) : (
          <RemoteImage
            source={source}
            style={{width: 51, height: 52, borderRadius: 100}}
          />
        )}
      </Row>
      <Box mt="sm">
        <Text variant="p4" textAlign="center">
          {name}
        </Text>
        <Text color="neutral" variant="p5" textAlign="center" mt="xs">
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
};
