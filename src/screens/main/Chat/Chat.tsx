import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {
  Box,
  Screen,
  Text,
  Row,
  RemoteImage,
  TouchableOpacity,
} from '../../../components/atom';
import LeftArrow from '../../../assets/icons/leftArrowIcon.svg';
import ShareIcon from '../../../assets/icons/shareIconBlack.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfilePic from '../../../assets/images/player2.png';
import {ChatHeaderAvatar} from '../../../components/molecules/ChatHeaderAvatar/ChatHeaderAvatar';
import {ChatMessage} from '../../../components/molecules';
import PlusIcon from '../../../assets/icons/plusIcon.svg';
import SendIcon from '../../../assets/icons/sendIcon.svg';

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
      <Box position="relative" height={'100%'}>
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

        <Box p="md" flex={1}>
          <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ChatMessage message={item} />}
            contentContainerStyle={{paddingBottom: 100}}
            showsVerticalScrollIndicator={false}
          />
        </Box>

        <Box
          p="md"
          borderTopWidth={1}
          borderTopColor="lightGrey"
          bg="white"
          position="absolute"
          bottom={0}
          width="100%"
          height={90}>
          <Row alignItems="center" px="lg" width="100%">
            <Row width="11%">
              <PlusIcon width={20} height={20} />
            </Row>
            <Box width="80%">
              <Text variant="p2" color="grey">
                Add a comment...
              </Text>
            </Box>
            <TouchableOpacity
              bg="primary"
              width={40}
              height={40}
              borderRadius="full"
              justifyContent="center"
              alignItems="center">
              <SendIcon />
            </TouchableOpacity>
          </Row>
        </Box>
      </Box>
    </Screen>
  );
};
