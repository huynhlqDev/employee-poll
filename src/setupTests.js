import '@testing-library/jest-dom';
import 'jest';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithProviders = ( ui, store ) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
