import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import {LoadingSpinner} from '../../../src/components';

describe('loading spinner component test', () => {
  it('renders loading spinner', () => {
    const {getByTestId} = render(<LoadingSpinner isLoading={true} />);
    getByTestId('loadingSpinnerComponent');
  });

  it('should not render activity indicator', () => {
    const {getByTestId} = render(<LoadingSpinner isLoading={false} />);
    expect(getByTestId('loadingSpinnerComponent').props.animating).toBeFalsy();
  });
});
