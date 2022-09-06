import {List} from '../../../../src/screens';
import {renderWithProviders} from '../../../utils/test-utils';

describe('list screen tests', () => {
  it('renders screen views correctly', () => {
    const {getByTestId} = renderWithProviders(<List />);
    getByTestId('containerComponent');
    getByTestId('searchBarView');
    getByTestId('resultListView');
  });
});
