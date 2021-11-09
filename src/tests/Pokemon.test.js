import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon ',
  () => {
    it('Teste se é renderizado um card com as informações do pokémon.', () => {
      renderWithRouter(<App />);

      const pokemonName = screen.getByTestId('pokemon-name');
      expect(pokemonName).toHaveTextContent('Pikachu');
      expect(pokemonName).toBeInTheDocument();

      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent('Electric');
      expect(pokemonType).toBeInTheDocument();

      const pokemonWeight = screen.getByTestId('pokemon-weight');
      expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
      expect(pokemonWeight).toBeInTheDocument();

      const pokemonImg = screen.getByAltText('Pikachu sprite');
      expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
      expect(pokemonImg).toBeInTheDocument();
    });
    it('Teste se é renderizado um card com as informações do pokémon.', () => {
      const { history } = renderWithRouter(<App />);
      const linkPokemon = screen.getByText('More details');

      userEvent.click(linkPokemon);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/pokemons/25');
    });
    it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
      renderWithRouter(<App />);
      const linkToPokemonDetails = screen.getByText('More details');
      userEvent.click(linkToPokemonDetails);

      const labelPokemon = screen.getByLabelText('Pokémon favoritado?');
      userEvent.click(labelPokemon);

      const starSvg = screen.getByAltText('Pikachu is marked as favorite');
      expect(starSvg).toHaveAttribute('src', '/star-icon.svg');
    });
  });
