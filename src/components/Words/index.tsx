import React from 'react';
import {FlatList, View} from 'react-native';
import {
  getBarWidth,
  getColorDistantece,
} from '../../services/getColorDistantece';
import {IWordType} from '../../types/wordType';
import {Container, Word, WordContainer} from './styles';

interface IWordsProps {
  words: IWordType[];
  lastWord?: IWordType;
}

const Words: React.FC<IWordsProps> = ({words, lastWord}) => {
  return (
    <>
      {lastWord && (
        <View style={{marginVertical: 10}}>
          <Container>
            <View
              style={{
                width: getBarWidth(lastWord?.distance),
                position: 'absolute',
                height: '100%',
                backgroundColor: getColorDistantece(lastWord.distance),
                borderRadius: 3,
              }}
            />
            <WordContainer>
              <Word>{lastWord.word}</Word>
              <Word>{lastWord.distance + 1}</Word>
            </WordContainer>
          </Container>
        </View>
      )}

      <FlatList
        data={words?.sort((a, b) => a.distance - b.distance)}
        keyExtractor={item => `${item.word}-${item.distance}`}
        renderItem={({item}) => (
          <Container>
            <View
              style={{
                width: getBarWidth(item.distance),
                position: 'absolute',
                height: '100%',
                backgroundColor: getColorDistantece(item.distance),
                borderRadius: 3,
              }}
            />
            <WordContainer>
              <Word>{item.word}</Word>
              <Word>{item.distance + 1}</Word>
            </WordContainer>
          </Container>
        )}
      />
    </>
  );
};

export default Words;
