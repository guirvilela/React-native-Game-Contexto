import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  getBarWidth,
  getColorDistantece,
} from '../../services/getColorDistantece';
import {IWordType} from '../../types/wordType';
import {Container, Word, WordContainer} from './styles';

interface IWordsProps {
  words: IWordType[];
}

const Words: React.FC<IWordsProps> = ({words}) => {
  return (
    <ScrollView style={{marginTop: 15}}>
      {words?.length > 0 &&
        words
          .sort((a, b) => a.distance - b.distance)
          .map(({word, distance}) => (
            <Container key={distance}>
              <View
                style={{
                  width: getBarWidth(distance),
                  position: 'absolute',
                  height: '100%',
                  backgroundColor: getColorDistantece(distance),
                  borderRadius: 3,
                }}
              />

              <WordContainer>
                <Word>{word}</Word>
                <Word>{distance + 1}</Word>
              </WordContainer>
            </Container>
          ))}
    </ScrollView>
  );
};

export default Words;
