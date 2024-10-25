import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Words = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  flex: 1;
  text-align: center;
`;
