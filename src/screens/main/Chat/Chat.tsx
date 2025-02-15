import React from 'react';
import {Box, Screen, Text, Row, RemoteImage} from '../../../components/atom';
import LeftArrow from '../../../assets/icons/leftArrowIcon.svg';
import ShareIcon from '../../../assets/icons/shareIconBlack.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfilePic from '../../../assets/images/player2.png';

// Example data. You can fetch this from your API or state management later.
const messages = [
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
  },
];

const Avatar = ({source}: any) => (
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

const ChatMessage = ({message}: any) => (
  <Row mb={message.avatar ? 'xl' : 'md'} alignItems="flex-start">
    <Box width={40} height={40} alignSelf="flex-end">
      {message?.avatar && (
        <RemoteImage
          source={message?.avatar}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </Box>
    <Box
      borderWidth={1}
      ml="sm"
      p="sm"
      borderRadius="lg"
      bg="white"
      borderColor="white"
      width={'80%'}>
      {message?.user && (
        <Text variant="p3_medium" fontWeight="500" color="deepBrown">
          {message.user}
        </Text>
      )}
      <Text variant="p3" mt="xs" color="deepBrown">
        {message.text}
      </Text>
      <Text variant="p5" color="neutral" textAlign="right">
        {message.timestamp}
      </Text>
    </Box>
  </Row>
);

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
            <Avatar source={ProfilePic} />
            <Avatar source={ProfilePic} />
            <Avatar source={ProfilePic} />
            <Avatar source={ProfilePic} />
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
