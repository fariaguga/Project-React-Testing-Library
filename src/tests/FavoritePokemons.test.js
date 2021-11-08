import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente FavoritePokemons ',
  () => {
    it('Teste se é exibido na tela a mensagem No favorite pokemon found.', () => {
      renderWithRouter(<App />);
      const favPokemonsLink = screen.getByText('Favorite Pokémons');
      userEvent.click(favPokemonsLink);

      const noFavPokemons = screen.getByText('No favorite pokemon found');
      expect(noFavPokemons).toBeInTheDocument();
    });
    it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
      renderWithRouter(<App />);
      const pokemonDetails = screen.getByText('More details');
      expect(pokemonDetails).toBeInTheDocument();
      userEvent.click(pokemonDetails);

      const labelFavorite = screen.getByText('Pokémon favoritado?');
      expect(labelFavorite).toBeInTheDocument();
      userEvent.click(labelFavorite);

      const favoritePokemons = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favoritePokemons);

      const favPokemonName = screen.getByTestId('pokemon-name');
      expect(favPokemonName).toBeInTheDocument();
    });
  });
