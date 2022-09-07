import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {SearchBar} from 'screens/list/views';
import {renderWithProviders} from '../../../../utils/test-utils';

describe('search bar view test', () => {
  const testID = 'searchBarView';
  const text = 'Voidwalker';

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
    const {queryByTestId, getByTestId} = renderWithProviders(
      <SearchBar testID={testID} />,
    );
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

  it('should set redux state after text changes and some milliseconds', async () => {
    const {getByTestId, store} = renderWithProviders(
      <SearchBar testID={testID} />,
    );
    const textInput = getByTestId('searchBarViewTextInput');
    fireEvent.changeText(textInput, text);
    await waitFor(
      () => {
        const {
          hearthstone: {searchText},
        } = store.getState();
        expect(searchText).toBe(text);
      },
      {timeout: 1000},
    );
  });
});
