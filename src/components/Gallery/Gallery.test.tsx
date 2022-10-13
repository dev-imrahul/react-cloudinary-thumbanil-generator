import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from './Gallery';

describe('<Gallery />', () => {
  test('it should mount', () => {
    render(<Gallery />);
    
    const gallery = screen.getByTestId('Gallery');

    expect(gallery).toBeInTheDocument();
  });
});