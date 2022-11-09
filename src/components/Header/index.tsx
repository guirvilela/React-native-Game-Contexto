import React from 'react';
import {
  Button,
  Container,
  ContextText,
  GameId,
  LetterC,
  TextButton,
} from './styles';

interface IHeader {
  gameId: number;
  btnTip: boolean;
  handleNewTip: () => void;
  loading?: boolean;
}

const Header: React.FC<IHeader> = ({gameId, btnTip, handleNewTip, loading}) => {
  return (
    <Container>
      <ContextText>
        <LetterC>C</LetterC>ontexto - <GameId>#{gameId}</GameId>
      </ContextText>

      {btnTip && (
        <Button onPress={handleNewTip} disabled={loading}>
          <TextButton> &#x1F4A1;</TextButton>
        </Button>
      )}
    </Container>
  );
};

export default Header;
