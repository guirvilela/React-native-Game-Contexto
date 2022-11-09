import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 8px;
  border: 3px solid ${props => props.theme.colors.white};
  position: relative;
  margin-top: 15px;
`;

export const WordContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Word = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  padding: 15px;
  font-weight: 500;
`;
