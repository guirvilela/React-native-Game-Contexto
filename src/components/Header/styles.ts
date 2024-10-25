import styled from 'styled-components/native';

interface HeaderButtonProps{
  side: 'left' | 'right'
}

export const Container = styled.View`
  position: relative;
`;

export const ContextText = styled.Text`
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const LetterC = styled.Text`
  color: ${props => props.theme.colors.green};
`;

export const GameId = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity<HeaderButtonProps>`
  background: ${props => props.theme.colors.green};
  padding: 5px;
  border-radius: 8px;
  width: 50px;
  position: absolute;
  z-index: 1;

  
  ${({ side }) => side === 'right' ? 'right: 0;' : 'left: 0;'}

  top: 30%;
`;


export const TextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
  margin-right: 3px;
`;
