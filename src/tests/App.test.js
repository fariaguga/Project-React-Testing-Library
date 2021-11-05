import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação. ',
  () => {
    it('O primeiro Link deve possuir o texto "Home" ', () => {
      renderWithRouter(<App />);
      const homeLink = screen.getByText('Home');
      expect(homeLink).toBeInTheDocument();
    });
    it('O Segundo Link deve possuir o texto "About" ', () => {
      renderWithRouter(<App />);
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toBeInTheDocument();
    });
    it('O Terceiro Link deve possuir o texto "Favorite Pokémons" ', () => {
      renderWithRouter(<App />);
      const favPokemonsLink = screen.getByText('About');
      expect(favPokemonsLink).toBeInTheDocument();
    });
  });

describe('Teste se a os Links direcionam para as rotas corretas. ',
  () => {
    it('Testa se o Link "Home" direciona para a rota "/" ', () => {
      const { history } = renderWithRouter(<App />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toBeInTheDocument();
      userEvent.click(homeLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/');
    });
    it('Testa se o Link "About" direciona para a rota "/about" ', () => {
      const { history } = renderWithRouter(<App />);

      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    });
    it('Testa se o Link "Favorite Pokemons" direciona para a rota "/favorites" ', () => {
      const { history } = renderWithRouter(<App />);

      const favPokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(favPokemonsLink).toBeInTheDocument();
      userEvent.click(favPokemonsLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    });
    it('deve testar um caminho não existente e a renderização do Not Found', () => {
      const { history } = renderWithRouter(<App />);

      history.push('/page-not-found');
      const notFoundTitle = screen.getByText('Page requested not found');
      expect(notFoundTitle).toBeInTheDocument();
    });
  });
