import styled from 'styled-components/native';

export const Congratulation = styled.View`
  padding: 14px;
  border-radius: 8px;
  background: ${props => props.theme.colors.bgLighterColor};
  /* max-height: 460px !important; */

  border: 0.5px solid ${props => props.theme.colors.white};
`;

export const CongratulationTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: 800;
  font-size: 20px;
  text-align: center;
`;

export const CongratulationSubTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  margin: 8px 0;
  font-weight: 600;
  text-align: center;
`;

export const CongratulationNumber = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 20px;

  font-weight: 800;
`;
