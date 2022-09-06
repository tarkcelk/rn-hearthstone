import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render} from '@testing-library/react-native';
import {ListButton} from '../../../src/components';
import {cardMockData, mechanicMockData} from '../../mocks/list.mocks';

describe('list button component test', () => {
  it('renders mechanic correctly', () => {
    const {getByTestId} = render(<ListButton data={mechanicMockData[0]} />);
    getByTestId('listButtonComponent');
  });

  it('should set the replacement text when button pressed', () => {
    let text = '';
    const replacement = 'text has changed';
    const onListButtonPress = () => (text = replacement);
    const {getByTestId} = render(<ListButton data={cardMockData[0]} onPress={onListButtonPress} />);
    const element = getByTestId('listButtonComponent');
    fireEvent.press(element);
    expect(text).toBe(replacement);
  });

  it('renders text', () => {
    const data = mechanicMockData[0];
    const {getByTestId} = render(<ListButton data={data} />);
    const textIncludesTheName = getByTestId('listButtonText').props.children.includes(data.name);
    expect(textIncludesTheName).toBeTruthy();
  });
});
