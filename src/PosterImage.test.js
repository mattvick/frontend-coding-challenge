/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import PosterImage from './PosterImage';

const path = '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg';

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

it('renders with or without alt text', () => {
  act(() => {
    render(<PosterImage path={path} />, container);
  });
  expect(container.querySelector('img').getAttribute('alt'))
    .toBe('Movie poster image');

  const alt = 'Pulp Fiction movie poster';
  act(() => {
    render(<PosterImage path={path} alt={alt} />, container);
  });
  expect(container.querySelector('img').getAttribute('alt'))
    .toBe(alt);
});

it('renders without baseUrl or size', () => {
  act(() => {
    render(<PosterImage path={path} />, container);
  });
  expect(container.querySelector('img').getAttribute('src'))
    .toBe(`//image.tmdb.org/t/p/w92${path}`);
});

it('renders with size', () => {
  const size = 'w500';
  act(() => {
    render(<PosterImage path={path} size={size} />, container);
  });
  expect(container.querySelector('img').getAttribute('src'))
    .toBe(`//image.tmdb.org/t/p/${size}${path}`);
});

it('renders with baseUrl', () => {
  const baseUrl = 'http://image.tmdb.org/t/p/';
  act(() => {
    render(<PosterImage path={path} baseUrl={baseUrl} />, container);
  });
  expect(container.querySelector('img').getAttribute('src'))
    .toBe(`${baseUrl}w92${path}`);
});

test('PosterImage matches snapshot', () => {
  const component = renderer.create(
    <PosterImage path={path} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
