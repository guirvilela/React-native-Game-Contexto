import React from 'react';
import {
  Congratulation,
  CongratulationNumber,
  CongratulationSubTitle,
  CongratulationTitle,
} from './styles';

interface CongratulationsProps {
  gameId: number;
  tryNumber: number;
  tipNumber?: number;
}

export const Congratulations: React.FC<CongratulationsProps> = ({
  gameId,
  tryNumber,
  tipNumber,
}) => {
  return (
    <Congratulation>
      <CongratulationTitle>Parabéns! Você acertou!</CongratulationTitle>

      <CongratulationSubTitle style={{marginTop: 16}}>
        Você acertou a palavra{' '}
        <CongratulationNumber>#{gameId}</CongratulationNumber> com {'\n'}{' '}
        <CongratulationNumber>{tryNumber}</CongratulationNumber>{' '}
        {tryNumber > 1 ? 'tentativas' : 'tentativa'}
        {tipNumber !== undefined && tipNumber > 0 && (
          <>
            {' '}
            e <CongratulationNumber>{tipNumber}</CongratulationNumber>{' '}
            {tipNumber > 1 ? 'dicas' : 'dica'}
          </>
        )}
        .
      </CongratulationSubTitle>
    </Congratulation>
  );
};
