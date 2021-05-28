/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen, waitFor } from '../../test-utils';
import StationPage from './StationPage';

describe('지하철 역 관리', () => {
  test('loads items eventually', async () => {
    render(<StationPage />);

    const stationList = await waitFor(() => screen.findAllByRole('listitem'));

    expect(stationList).toHaveLength(13);
  });
});
