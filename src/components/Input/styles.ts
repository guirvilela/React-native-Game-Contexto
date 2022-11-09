import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.bgColor};
  width: 100%;
  border-style: solid;
  border-top-color: #fff;
  border-top-width: 2px;
`;

export const ContainerInput = styled.TextInput`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  border-radius: 8px;
  top: -5px;
  padding-left: 15px;
  padding-top: 20px;
  width: 100%;
`;
