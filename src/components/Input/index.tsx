import React, {useState} from 'react';
import theme from '../../styles/theme';
import {Container, ContainerInput} from './styles';

interface InputProps {
  handleSendText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({handleSendText}) => {
  const [word, setWord] = useState<string>();
  return (
    <Container>
      <ContainerInput
        placeholderTextColor={theme.colors.white}
        placeholder="Digite uma palavra"
        onSubmitEditing={() => {
          if (word) {
            handleSendText(word);
            return setWord('');
          }
        }}
        onChangeText={text => setWord(text)}
        value={word}
      />
    </Container>
  );
};

export default Input;
