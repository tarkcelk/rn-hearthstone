import React from 'react';
import {Text} from 'react-native';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import {Container} from '../../../src/components';

describe('container component test', () => {
  it('renders component correctly', () => {
    const text = 'Text element';
    const textTestID = 'counterText';
    const containerTestID = 'containerComponent';
    const {getByTestId} = render(
      <Container style={{backgroundColor: 'red'}} testID={containerTestID}>
        <Text testID={textTestID}>{text}</Text>
      </Container>,
    );

    getByTestId(containerTestID);
    const textElement = getByTestId(textTestID);
    expect(textElement.props.children).toBe(text);
  });
});
