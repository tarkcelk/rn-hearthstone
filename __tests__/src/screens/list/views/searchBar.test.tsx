import React from 'react';
import '@testing-library/jest-native';
import {SearchBar} from '../../../../../src/screens/list/views';
import {renderWithProviders} from '../../../../utils/test-utils';
import {fireEvent} from '@testing-library/react-native';

describe('search bar view test', () => {
  const testID = 'searchBarView';
  const text = 'Void Walker';

  it('renders search bar', () => {
    const {getByTestId} = renderWithProviders(<SearchBar testID={testID} />);
    getByTestId(testID);
  });

  it('should set state when text changes', () => {
    const {getByTestId} = renderWithProviders(<SearchBar testID={testID} />);
    const textInput = getByTestId('searchBarViewTextInput');
    fireEvent.changeText(textInput, text);
    expect(textInput.props.value).toBe(text);
  });

  it('should not display clean button at first', () => {
    const {queryByTestId} = renderWithProviders(<SearchBar testID={testID} />);
    const cleanButton = queryByTestId('searchBarViewCleanButton');
    expect(cleanButton).toBeNull();
  });

  it('should display clean button after text changes', () => {
    const {queryByTestId, getByTestId} = renderWithProviders(<SearchBar testID={testID} />);
    const cleanButton = queryByTestId('searchBarViewCleanButton');
    const textInput = getByTestId('searchBarViewTextInput');
    fireEvent.changeText(textInput, text);
    expect(cleanButton).toBeDefined();
  });

  it('should clear text after clean button clicked', () => {
    const {getByTestId} = renderWithProviders(<SearchBar testID={testID} />);
    const textInput = getByTestId('searchBarViewTextInput');
    fireEvent.changeText(textInput, text);
    const cleanButton = getByTestId('searchBarViewCleanButton');
    fireEvent.press(cleanButton);
    expect(textInput.props.value).toBe('');
  });
});
