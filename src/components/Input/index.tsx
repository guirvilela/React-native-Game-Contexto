import React, {useState} from 'react';
import theme from '../../styles/theme';
import {Container, ContainerInput} from './styles';

interface InputProps {
  handleSendText: (text: string) => void;
  disabled: boolean;
}

const Input: React.FC<InputProps> = ({handleSendText, disabled}) => {
  const [word, setWord] = useState<string>();
  return (
    <Container>
      <ContainerInput
        placeholderTextColor={theme.colors.white}
        placeholder={
          disabled ? 'Você acertou, inicie outro jogo' : 'Digite uma palavra'
        }
        editable={!disabled}
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
