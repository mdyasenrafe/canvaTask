import React from 'react';
import {Box, Screen, Text, Row, RemoteImage} from '../../../components/atom';
import LeftArrow from '../../../assets/icons/leftArrowIcon.svg';
import ShareIcon from '../../../assets/icons/shareIconBlack.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfilePic from '../../../assets/images/player2.png';
import {ChatHeaderAvatar} from '../../../components/molecules/ChatHeaderAvatar/ChatHeaderAvatar';
import {ChatMessage} from '../../../components/molecules';
import {ImageSourcePropType} from 'react-native';

export type TMessage = {
  id: number;
  user?: string;
  avatar?: any;
  text: string;
  timestamp: string;
  isCurrentUser?: boolean;
};

const messages: TMessage[] = [
  {
    id: 1,
    user: 'Penn N. (panther)',
    text: 'Hey guys, thanks a lot for the impressive game, it was fun!',
    timestamp: '20:00',
  },
  {
    id: 2,
    avatar: ProfilePic,
    text: 'Certainly, it was fantastic to see how each point lasted. It’s always fun to play with players.',
    timestamp: '20:00',
  },
  {
    id: 3,
    user: 'Penn N. (panther)',
    avatar: ProfilePic,
    text: 'The dedication of the ball was stunning.',
    timestamp: '20:00',
  },
  {
    id: 4,
    user: 'Penn N. (panther)',
    avatar: ProfilePic,
    text: 'I’m crossing my fingers that the next game will be crazy!',
    timestamp: '20:00',
    isCurrentUser: true,
  },
];

export const Chat: React.FC = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Screen name="Chat" expandToTopEdge>
      <Box>
        <Box
          style={{paddingTop: top}}
          p="xl"
          borderBottomWidth={1}
          borderBottomColor="lightGrey"
          bg="white">
          <Row justifyContent="space-between" alignItems="center">
            <Text variant="p2" color="primary">
              Monday, February 23 | 14:00 - Tel Aviv
            </Text>
            <LeftArrow />
          </Row>
        </Box>

        <Row
          px="xl"
          py="md"
          alignItems="center"
          justifyContent="space-between"
          bg="white">
          <ShareIcon />
          <Row>
            <ChatHeaderAvatar source={ProfilePic} />
            <ChatHeaderAvatar source={ProfilePic} />
            <ChatHeaderAvatar source={ProfilePic} />
            <ChatHeaderAvatar source={ProfilePic} />
          </Row>
          <Box />
        </Row>

        <Box p="md">
          {messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </Box>

        {/*
          <Box p="md" borderTopWidth={1} borderTopColor="lightGrey">
            <Row alignItems="center">
              <Box
                flex={1}
                borderWidth={1}
                borderColor="lightGrey"
                borderRadius="md"
                p="sm"
                mr="sm">
                <Text variant="p2" color="grey">
                  Add a comment...
                </Text>
              </Box>
              <Button label="Send" onPress={() => {}} />
            </Row>
          </Box>
        */}
      </Box>
    </Screen>
  );
};
