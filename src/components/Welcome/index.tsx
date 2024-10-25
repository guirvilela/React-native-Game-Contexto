import React from 'react';
import {
  HowToPlay,
  HowToPlaySubTitle,
  HowToPlaySubTitleTip,
  HowToPlayTitle,
} from './styles';

export const Welcome: React.FC = () => {
  return (
    <HowToPlay>
      <HowToPlayTitle>❔ Como jogar</HowToPlayTitle>

      <HowToPlaySubTitle style={{marginTop: 16}}>
        Descubra a palavra secreta. Você pode tentar quantas vezes precisar.
      </HowToPlaySubTitle>

      <HowToPlaySubTitle>
        As palavras foram ordenadas por um algoritmo de inteligência artificial
        de acordo com a similaridade delas com a palavra secreta.
      </HowToPlaySubTitle>

      <HowToPlaySubTitle>
        Depois de enviar uma palavra, você verá a posição em que ela está. A
        palavra secreta é a número 1.
      </HowToPlaySubTitle>

      <HowToPlaySubTitle>
        O algoritmo analisou milhares de textos em Português. Ele utiliza o
        contexto em que as palavras são utilizadas para calcular a similaridade
        entre elas.
      </HowToPlaySubTitle>

      <HowToPlaySubTitleTip>
        Para começar digite uma palavra
      </HowToPlaySubTitleTip>
    </HowToPlay>
  );
};
