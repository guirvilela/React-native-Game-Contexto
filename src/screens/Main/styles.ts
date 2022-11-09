import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.bgColor};
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 8px;
  background: #1d9bf0;
  padding: 5px;
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;
