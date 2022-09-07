import React from 'react';
import '@testing-library/jest-native';
import {cleanup, fireEvent, waitFor} from '@testing-library/react-native';
import {setSearchText} from 'redux/features/hearthstone';
import {List} from 'screens/list/views';
import {ListButton} from 'components';
import {CardType} from 'types/card';
import {renderWithProviders} from '../../../../utils/test-utils';
import {
  cardMockData,
  mechanicMockData,
  preloadedState,
} from '../../../../mocks/list.mocks';

afterEach(cleanup);

describe('list view test', () => {
  const testID = 'listView';

  it('should render list view', async () => {
    const {getByTestId} = renderWithProviders(<List testID={testID} />);
    await waitFor(() => getByTestId(testID));
  });

  it('should render list view with mechanic data', async () => {
    const {getByTestId} = renderWithProviders(<List testID={testID} />, {
      preloadedState,
    });
    const props = await waitFor(() => getByTestId(testID).props);

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

  it('should render list view with card data', async () => {
    const {getByTestId, store, rerender} = renderWithProviders(
      <List testID={testID} />,
      {
        preloadedState,
      },
    );
    await waitFor(() => store.dispatch(setSearchText('Card')));
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

  it('should not render anything when search text doesnt match', async () => {
    const {getByTestId, store, rerender} = renderWithProviders(
      <List testID={testID} />,
      {
        preloadedState,
      },
    );
    await waitFor(() => store.dispatch(setSearchText('Not a card name')));
    rerender(<List testID={testID} />);
    let props = getByTestId(testID).props;
    expect(props.data.length).toBe(0);
  });

  it('should not render mechanic data', async () => {
    const {getByTestId} = renderWithProviders(<List testID={testID} />);
    let props = getByTestId(testID).props;
    expect(props.data.length).toBe(0);
  });
});
