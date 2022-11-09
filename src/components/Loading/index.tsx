import React from 'react';
import Lottie from 'lottie-react-native';
import {Container} from './styles';

interface ILoading {
  isLoading: boolean;
}

const Loading: React.FC<ILoading> = ({isLoading}: ILoading) => {
  return (
    <>
      {isLoading && (
        <Container>
          <Lottie
            source={require('../../assets/loading/loading.json')}
            autoPlay
            loop={true}
            resizeMode="cover"
            style={{width: '100%'}}
          />
        </Container>
      )}
    </>
  );
};

export default Loading;
