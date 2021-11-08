import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente NotFound ',
  () => {
    it('Teste se página contém um  h2 com o texto Page requested not found 😭;', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/page/not-found123/');
      const textNotFound = screen.getByRole('heading',
        { level: 2 });
      expect(textNotFound).toBeInTheDocument();
      expect(textNotFound).toHaveTextContent('Page requested not found 😭');
    });
    it('Teste se página contém um  h2 com o texto Page requested not found 😭;', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/page/not-found123/');
      const imgPikachu = screen.getByAltText(
        'Pikachu crying because the page requested was not found',
      );
      // const imgFinal = imgPikachu[1];
      expect(imgPikachu).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    });
  });
