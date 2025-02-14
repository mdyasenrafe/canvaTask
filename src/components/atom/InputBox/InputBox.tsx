import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  useRestyle,
  composeRestyleFunctions,
  layout,
  spacing,
  border,
  backgroundColor,
} from '@shopify/restyle';
import {RestyleInputProps, TextInputProps} from './types/types';
import {Box, Row, Text} from '..';
import {Theme} from '../../../theme';
import {FONTS} from '../../../theme/fonts';

const errorStyle = {borderColor: 'red'};

export const InputBox: React.FC<TextInputProps> = ({
  onChangeText,
  value,
  placeholder = '',
  isSecureTextEntry = false,
  placeholderTextColor,
  inputStyle,
  inputType,
  capitalizationMode = 'none',
  isEditable,
  textMaxLength,
  hasShowPasswordOption,
  showPasswordToggleComponent,
  keyboardReturnKeyType,
  returnKeyLabelText,
  onReturnKeySubmit,
  textInputRef,
  shouldAutoFocus,
  onBlur,
  label,
  error,
  labelColor = 'white',
  multiline,
  onSelectionChange,
  onContentSizeChange,
  numberOfLines,
  defaultValue,
  autoCorrect = true,
  ...rest
}) => {
  const restyleFunctions = composeRestyleFunctions<Theme, RestyleInputProps>([
    spacing,
    border,
    backgroundColor,
    layout,
  ]);
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box>
      <Row alignItems="center" justifyContent="space-between">
        {label && (
          <Text variant="p1_bold" color={labelColor}>
            {label}
          </Text>
        )}
        {error ? (
          <Box>
            <Text variant="p4" color="red">
              {error}
            </Text>
          </Box>
        ) : null}
      </Row>
      <View
        {...props}
        style={[styles.container, props.style, error ? errorStyle : {}]}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          secureTextEntry={isSecureTextEntry}
          placeholderTextColor={placeholderTextColor}
          style={[styles.input, inputStyle]}
          autoCapitalize={capitalizationMode}
          keyboardType={inputType}
          defaultValue={defaultValue}
          editable={isEditable}
          maxLength={textMaxLength}
          onSubmitEditing={onReturnKeySubmit}
          returnKeyLabel={returnKeyLabelText}
          returnKeyType={keyboardReturnKeyType}
          ref={textInputRef || null}
          autoFocus={shouldAutoFocus}
          onBlur={onBlur}
          multiline={multiline}
          onSelectionChange={onSelectionChange}
          onContentSizeChange={onContentSizeChange}
          numberOfLines={numberOfLines}
          autoCorrect={autoCorrect}
        />
        {hasShowPasswordOption && showPasswordToggleComponent}
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#C1C1C1',
    borderRadius: 8,
    justifyContent: 'center',
  },
  input: {
    height: 60,
    fontSize: 14,
    width: '100%',
    paddingHorizontal: 24,
    fontFamily: FONTS.regular,
  },
});
