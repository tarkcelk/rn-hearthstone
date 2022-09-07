import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import {List, ListButton} from 'components';
import {ListItemType} from 'types/component';
import {cardMockData, mechanicMockData} from '../../mocks/list.mocks';

describe('list component test', () => {
  const testID = 'listComponent';
  it('renders mechanics correctly', () => {
    const {getByTestId} = render(
      <List data={mechanicMockData} testID={'listComponent'} />,
    );
    expect(getByTestId(testID)).toBeTruthy();
  });

  it('renders related data correctly', () => {
    const check = (data: ListItemType[]) => {
      const {getByTestId} = render(<List data={data} testID={testID} />);
      const props = getByTestId(testID).props;

      props.data.forEach((propData: any) => {
        const itemElement = props?.renderItem({item: propData});

        const cardIdExists = cardMockData.some(
          cmd => cmd.cardId === itemElement.props.data.cardId,
        );
        const mechanicDataExists = mechanicMockData.some(
          mmd => mmd.name === itemElement.props.data.name,
        );
        expect(itemElement.type).toEqual(ListButton);
        expect(cardIdExists || mechanicDataExists).toBeTruthy();
      });
    };
    check(cardMockData);
    check(mechanicMockData);
  });
});
