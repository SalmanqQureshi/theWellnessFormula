import React, { forwardRef, useState } from 'react';
import { Block, Image, Text, useForm } from '../../..';
import { Colors, Icons } from '../../../../config';
import { StyleSheet } from 'react-native';
import { FormComponentContainer } from '../../FormComponentContainer';
import { useBoolAnimation } from '../../../useBoolAnimation';



type Props = {
  text: string;
  highlightedText: string;
  highlightedText2: string;
  required?: boolean
  RemoveMargin?: boolean;
  errorText?: string;
  onHighlightedPress?: () => any;
  onPress?: () => void
  value?: boolean
};

export const CheckBox = forwardRef<any, Props>(({ required = true, value = 0, ...props }, upRef) => {
  const { State, setState } = useForm({
    upRef,
    focus() {

    },
    validate(current) {
      if (!!required && !current) return [props.errorText || "Required"]
      return []
    },
    initialValue: value
  })
  const animateOnError = useBoolAnimation(State.isError)
  return (
    <FormComponentContainer animateOnError={animateOnError} isError={State.isError} ErrorText={State.ErrorText}>
      <Block row margin={{ Bottom: props.RemoveMargin ? 0 : 26 }}>
        <Block
          margin={{ Right: props.RemoveMargin ? 5 : 12 }}
          align="middle"
          onPress={() => {
            setState(s => {
              try {
                props?.onPress?.({ check: !!s.value ? 0 : 1 })
              } catch (e) {
                console.error("Error in onPress of CheckBox", e)
              }
              return ({ ...s, value: !!s.value ? 0 : 1, isError: false })
            })
          }}>
          <Image
            style={styles.check}
            resizeMode="contain"
            source={State.value == true ? Icons.ic_uncheck : Icons.ic_uncheck}
          />
        </Block>
        {!!props.text &&
          <Text
            align='center'
            style={{ alignSelf: 'center' }}
            color={'primary'}>
            {props.text}{''}
            <Text
              style={{ textDecorationLine: 'underline' }}
              decoration="SemiBold"
              onPress={props.onHighlightedPress}
              color={Colors.primary}>
              {props.highlightedText}
            </Text>
            {' '}
            <Text
              style={{ textDecorationLine: 'underline' }}
              decoration="SemiBold"
              onPress={props.onHighlightedPress}
              color={Colors.primary}>
              {props.highlightedText2}
            </Text>
          </Text>
        }
      </Block>
    </FormComponentContainer>
  );
});

const styles = StyleSheet.create({
  check: {
    width: 20,
    height: 20,
  },
});




