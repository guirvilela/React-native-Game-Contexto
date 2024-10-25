import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.bgColor};
  padding: 15px;
`;

export const Button = styled.TouchableOpacity`
  margin: 10px 0;
  background: #1d9bf0;
  padding: 5px;
  border-radius: 8px;
`;

export const ButtonContain = styled.View`
  padding: 0 15px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;
