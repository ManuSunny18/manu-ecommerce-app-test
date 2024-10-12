import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../index';

describe('home page test', () => {
  it('should transport to the correct destination on door use', () => {
    render(
          <BrowserRouter>
            <Home   />
          </BrowserRouter>
    );
    
    const door = screen.getByText('Go to Store');
    expect(door).toHaveAttribute('href', '/store');
    fireEvent.click(door);
    expect(window.location.pathname).toBe('/store');
  });
});