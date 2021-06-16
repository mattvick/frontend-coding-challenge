/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import * as http from './http';
import Movie from './Movie';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '680',
  }),
}));

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders movie info', async () => {
  const year = '1994';
  const fakeMovie = {
    id: 680,
    title: 'Pulp Fiction',
    overview: 'About a burger-loving hit man.',
    releaseDate: `${year}-09-10`,
    posterPath: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  };

  const getMovieSpy = jest.spyOn(http, 'getMovie').mockImplementation(() =>
    Promise.resolve(fakeMovie)
  );

  await act(async () => {
    render(<Movie />, container);
  });

  expect(getMovieSpy).toHaveBeenCalledTimes(1);
  expect(container.querySelector('h2').textContent).toBe(`${fakeMovie.title} (${year})`);
  expect(container.querySelector('p').textContent).toBe(fakeMovie.overview);

  http.getMovie.mockRestore();
});
