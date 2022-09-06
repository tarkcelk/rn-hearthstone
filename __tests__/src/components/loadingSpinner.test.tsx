import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import {LoadingSpinner} from '../../../src/components';

describe('loading spinner component test', () => {
  it('renders loading spinner', () => {
    const {getByTestId} = render(<LoadingSpinner />);
    getByTestId('loadingSpinnerComponent');
  });
});
