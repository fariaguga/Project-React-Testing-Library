import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente Pokedex ',
  () => {
    it('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
      renderWithRouter(<App />);
      const headingPokedex = screen.getByRole('heading', { level: 2 });
      expect(headingPokedex).toBeInTheDocument();
      expect(headingPokedex).toHaveTextContent('Encountered pokémons');
    });
    it('Teste próximo Pokémon da lista quando o botão Próximo pokémon é clicado.', () => {
      renderWithRouter(<App />);

      // Selecionando o primeiro pokemon exibido na lista
      const firtPokemon = screen.getByText('Pikachu');
      expect(firtPokemon).toBeInTheDocument();

      // Clicando no botão
      const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(nextButton).toBeInTheDocument();
      userEvent.click(nextButton);

      // Selecionando o segundo pokemon
      const secondPokemon = screen.getByText('Charmander');
      expect(secondPokemon).toBeInTheDocument();
      userEvent.click(nextButton);

      // Selecionando o terceiro pokemon
      const thirdPokemon = screen.getByText('Caterpie');
      expect(thirdPokemon).toBeInTheDocument();
    });
    it('Teste se mostra um pokemon por vez', () => {
      renderWithRouter(<App />);
      const pokedex = screen.getAllByTestId('pokemon-name');
      expect(pokedex.length).toBe(1);
    });
    it('Teste se a Podedex possui botões de filtro', () => {
      renderWithRouter(<App />);
      const pokemonTypes = [
        'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
      const buttonType = screen.getAllByTestId('pokemon-type-button');
      expect(buttonType.length).toBe(pokemonTypes.length);

      buttonType.map((button, index) => {
        expect(button).toBeInTheDocument();
        return expect(buttonType[index]).toHaveTextContent(pokemonTypes[index]);
      });

      const buttonAll = screen.getByRole('button', { name: 'All' });
      expect(buttonAll).toBeInTheDocument();
    });

    it('Teste se a Pokédex tem um botão para resetar o filtro', () => {
      renderWithRouter(<App />);

      const buttonAll = screen.getByRole('button', { name: 'All' });
      expect(buttonAll).toBeInTheDocument();
      expect(buttonAll).toHaveTextContent('All');
      userEvent.click(buttonAll);
    });
  });
