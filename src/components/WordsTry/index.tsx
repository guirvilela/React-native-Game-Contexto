import React from 'react';
import {Container, Words} from './styles';

interface IWordsTry {
  length: number;
  tips: number;
}

const WordsTry: React.FC<IWordsTry> = ({length, tips}) => {
  return (
    <Container>
      {length > 0 && <Words>Tentativas: {length}</Words>}
      {tips > 0 && <Words>Dicas: {tips}</Words>}
    </Container>
  );
};

export default WordsTry;
