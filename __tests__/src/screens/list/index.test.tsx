import {fireEvent} from '@testing-library/react-native';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {ListButton} from '../../../../src/components';
import {$Urls} from '../../../../src/constants';
import {setLoading} from '../../../../src/redux/features/hearthstone';
import {List} from '../../../../src/screens';
import {MechanicType} from '../../../../src/types/mechanic';
import {cardResponseData, mechanicMockData} from '../../../mocks/list.mocks';
import {renderWithProviders} from '../../../utils/test-utils';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 1000ms
// when receiving a get request to the `/api/user` endpoint
export const handlers = [
  rest.get(`${$Urls.base}/${$Urls.list}`, (req, res, ctx) => {
    return res(ctx.json(cardResponseData));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('list screen tests', () => {
  it('should render screen views correctly', () => {
    const {getByTestId} = renderWithProviders(<List />);
    getByTestId('containerComponent');
    getByTestId('searchBarView');
    getByTestId('resultListView');
    getByTestId('loadingSpinnerView');
  });

  it('should render loading icon correctly', () => {
    const {getByTestId, store, rerender} = renderWithProviders(<List />);
    expect(getByTestId('loadingSpinnerView').props.animating).toBeTruthy();
    store.dispatch(setLoading(false));
    rerender(<List />);
    expect(getByTestId('loadingSpinnerView').props.animating).toBeFalsy();
  });

  it('should render hearthstone api data correctly', async () => {
    const {getByTestId} = renderWithProviders(<List />);
    const props = getByTestId('resultListView').props;

    props.data.forEach((propData: {data: MechanicType}) => {
      const itemElement = props.renderItem({item: propData});
      fireEvent.press(itemElement);
      expect(itemElement.type).toEqual(ListButton);
      const mechanicExists = mechanicMockData.some(
        mmd => mmd.name === itemElement.props.data.name,
      );
      expect(mechanicExists).toBeTruthy();
    });
  });
});
