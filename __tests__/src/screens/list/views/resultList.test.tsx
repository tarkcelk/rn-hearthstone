import React from 'react';
import '@testing-library/jest-native';
import {List} from '../../../../../src/screens/list/views';
import {renderWithProviders} from '../../../../utils/test-utils';
import {
  cardMockData,
  mechanicMockData,
  preloadedState,
} from '../../../../mocks/list.mocks';
import {ListButton} from '../../../../../src/components';
import {setSearchText} from '../../../../../src/redux/features/hearthstone';
import {fireEvent} from '@testing-library/react-native';
import {CardType} from '../../../../../src/types/card';

describe('list view test', () => {
  const testID = 'listView';

  it('renders list view', () => {
    const {getByTestId} = renderWithProviders(<List testID={testID} />);
    getByTestId(testID);
  });

  it('should render list view with mechanic data', () => {
    const {getByTestId} = renderWithProviders(<List testID={testID} />, {
      preloadedState,
    });
    const props = getByTestId(testID).props;

    props.data.forEach((propData: {data: CardType}) => {
      const itemElement = props.renderItem({item: propData});
      fireEvent.press(itemElement);
      expect(itemElement.type).toEqual(ListButton);
      const mechanicDataExists = mechanicMockData.some(
        mmd => mmd.name === itemElement.props.data.name,
      );
      expect(mechanicDataExists).toBeTruthy();
    });
  });

  it('should render list view with card data', () => {
    const {getByTestId, store, rerender} = renderWithProviders(
      <List testID={testID} />,
      {
        preloadedState,
      },
    );
    store.dispatch(setSearchText('Card'));
    rerender(<List testID={testID} />);
    const props = getByTestId(testID).props;

    props.data.forEach((propData: {data: CardType}) => {
      const itemElement = props.renderItem({item: propData});
      fireEvent.press(itemElement);
      expect(itemElement.type).toEqual(ListButton);
      const cardIdExists = cardMockData.some(
        cmd => cmd.cardId === itemElement.props.data.cardId,
      );
      expect(cardIdExists).toBeTruthy();
    });
  });
});
