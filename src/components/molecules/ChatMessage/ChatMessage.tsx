import React from 'react';
import {Box, Row, Text, RemoteImage} from '../../../components/atom';
import {TMessage} from '../../../screens/main';
import LinearGradient from 'react-native-linear-gradient';
import {palette} from '../../../theme/elements';
import {Platform} from 'react-native';

type ChatMessageProps = {
  message: TMessage;
};

export const ChatMessage: React.FC<ChatMessageProps> = ({message}) => {
  const isCurrentUser = message.isCurrentUser;

  const bubbleStyle: any = {
    padding: 8,
    borderRadius: 10,
    width: '70%',
  };

  return (
    <Row
      mb={message.avatar ? 'xl' : 'md'}
      alignItems="flex-start"
      justifyContent={isCurrentUser ? 'flex-end' : 'flex-start'}>
      {!isCurrentUser && (
        <Box width={40} height={40} alignSelf="flex-end">
          {message.avatar && (
            <RemoteImage
              source={message.avatar}
              style={{width: '100%', height: '100%'}}
            />
          )}
        </Box>
      )}

      {isCurrentUser ? (
        <LinearGradient
          colors={['#34506D', '#3498DB']}
          start={{x: 1, y: 0.5}}
          end={{x: 0, y: 0.5}}
          style={[bubbleStyle, {marginRight: 8}]}>
          {message.user && (
            <Text variant="p3_medium" fontWeight="500" color="white">
              {message.user}
            </Text>
          )}
          <Text variant="p3" color="white">
            {message.text}
          </Text>
          <Text
            variant="p5"
            color="neutral"
            textAlign="right"
            pt={Platform.OS == 'ios' ? 'md' : 'none'}>
            {message.timestamp}
          </Text>
        </LinearGradient>
      ) : (
        <Box
          style={[
            bubbleStyle,
            {marginLeft: 8, borderWidth: 1, borderColor: palette.lightGrey},
          ]}
          bg="white">
          {message.user && (
            <Text variant="p3_medium" fontWeight="500" color="deepBrown">
              {message.user}
            </Text>
          )}
          <Text variant="p3" color="deepBrown">
            {message.text}
          </Text>
          <Text variant="p5" color="neutral" textAlign="right">
            {message.timestamp}
          </Text>
        </Box>
      )}

      {isCurrentUser && (
        <Box width={40} height={40} alignSelf="flex-end">
          {message.avatar && (
            <RemoteImage
              source={message.avatar}
              style={{width: '100%', height: '100%'}}
            />
          )}
        </Box>
      )}
    </Row>
  );
};
