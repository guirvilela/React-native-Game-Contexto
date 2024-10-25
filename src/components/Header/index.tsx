import {Link} from '@react-navigation/native';
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
  gameId?: number;
  btnTip: boolean;
  btnRefresh: boolean;
  handleNewTip: () => void;
  handleRefreshGame: () => void;
  loading?: boolean;
}

const Header: React.FC<IHeader> = ({
  gameId,
  btnTip,
  btnRefresh,
  handleNewTip,
  handleRefreshGame,
  loading,
}) => {
  return (
    <Container>
      {btnRefresh && (
        <Button onPress={handleRefreshGame} disabled={loading} side="left">
          <TextButton> 🔃</TextButton>
        </Button>
      )}

      <ContextText>
        <Link to="/Welcome">
          <LetterC>C</LetterC>ontexto <GameId>{gameId && `#${gameId}`}</GameId>
        </Link>
      </ContextText>

      {btnTip && (
        <Button onPress={handleNewTip} disabled={loading} side="right">
          <TextButton> &#x1F4A1;</TextButton>
        </Button>
      )}
    </Container>
  );
};

export default Header;
