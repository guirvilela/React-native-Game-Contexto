import {Link} from '@react-navigation/native';
import styled from 'styled-components/native';

export const HowToPlay = styled.ScrollView`
  padding: 14px;
  border-radius: 8px;
  background: ${props => props.theme.colors.bgLighterColor};
  max-height: 460px !important;

  border: 0.5px solid ${props => props.theme.colors.white};
`;

export const HowToPlayTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: 800;
  font-size: 20px;
`;

export const HowToPlaySubTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  margin: 8px 0;
  font-weight: 600;
`;

export const HowToPlaySubTitleTip = styled.Text`
  font-size: 18px;
  margin: 8px 0 30px;
  font-weight: 600;

  color: ${props => props.theme.colors.green};
  text-align: center;
`;

export const LinkButton = styled(Link)`
  margin-top: 8px;
  background: #1d9bf0;
  padding: 5px;
  border-radius: 8px;
  align-items: center;
`;

export const TextButtonBegin = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
  text-align: center;
  align-items: center;

  flex: 1;
`;
