import {ListButton} from 'components';
import {Detail} from 'screens';
import {CardType} from 'types/card';
import {cardMockData, preloadedState} from '../../../mocks/list.mocks';
import {renderWithProviders} from '../../../utils/test-utils';

describe('detail screen tests', () => {
  it('renders screen views correctly', () => {
    const {getByTestId} = renderWithProviders(<Detail />);
    getByTestId('containerComponent');
    getByTestId('listComponent');
  });

  it('should render correct mechanic cards', () => {
    const {getByTestId} = renderWithProviders(<Detail />, {
      preloadedState,
    });
    const props = getByTestId('listComponent').props;

    props.data.forEach((propData: {data: CardType}) => {
      const itemElement = props.renderItem({item: propData});
      expect(itemElement.type).toEqual(ListButton);
      const cardIdExists = cardMockData.some(
        cmd => cmd.cardId === itemElement.props.data.cardId,
      );
      expect(cardIdExists).toBeTruthy();
    });
  });
});
