import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MsgError from '../../components/MsgError';
import Words from '../../components/Words';
import WordsTry from '../../components/WordsTry';
import {getDataText, getTip} from '../../services/getDataText';
import {nextTipDistance} from '../../services/getDistanceTip';
import {IGameType, IWordType} from '../../types/wordType';
import {Button, Container, TextButton} from './styles';

const Main: React.FC = () => {
  const [words, setWords] = useState<IWordType[]>([]);
  const [tips, setTips] = useState<number>(0);
  const [msgError, setMsgError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [gameId, setGameId] = useState<number>(1);
  const [btnNewGame, setBtnNewGame] = useState<boolean>(false);
  const [btnTip, setBtnTip] = useState<boolean>(false);

  useEffect(() => {
    if (words[0]?.distance === 0) {
      setBtnNewGame(true);
    }
    if (words[0]?.distance > 2 || words?.length === 0) {
      setBtnTip(true);
    } else {
      setBtnTip(false);
    }
  }, [words, btnNewGame, btnTip]);

  useEffect(() => {
    getSavedGame();
  }, []);

  const getSavedGame = async () => {
    setLoading(true);

    const gameSaved: any = await AsyncStorage.getItem('@game');
    const game: IGameType = JSON.parse(gameSaved);
    if (gameSaved) {
      setGameId(game.gameId);
      setTips(game.tipLength);
      setWords(game.arrayWords);
    }
    setLoading(false);
  };

  const handleWriteText = useCallback(
    async (text: string) => {
      setLoading(true);

      const response = await getDataText(
        text.toLocaleLowerCase().trim(),
        gameId,
      );
      if (response.error) {
        return setMsgError(response.msgError);
      }
      const findEqualWords = words.find(
        objWord => objWord.distance === response.distance,
      );
      if (findEqualWords) {
        setLoading(false);

        return setMsgError('Você já escreveu essa palavra');
      }
      setMsgError('');
      setWords([...words, response]);
      await AsyncStorage.setItem(
        '@game',
        JSON.stringify({
          gameId: gameId,
          tipLength: tips,
          arrayWords: [...words, response],
        }),
      );

      setLoading(false);
    },
    [words],
  );

  const handleNewGame = async () => {
    setGameId(state => state + 1);
    setLoading(true);
    setMsgError('');
    setTips(0);
    setBtnNewGame(false);
    setWords([]);
    setLoading(false);
    await AsyncStorage.setItem(
      '@game',
      JSON.stringify({
        gameId: gameId + 1,
        tipLength: 0,
        arrayWords: [],
      }),
    );
  };

  const handleGetNewTip = useCallback(async () => {
    setLoading(true);

    let lastWord: any[] = [];
    if (words?.length > 0) {
      lastWord = [words[0].word, words[0].distance];
    }
    const numberTip = nextTipDistance(lastWord, words);

    const wordTip = await getTip(gameId, numberTip);
    console.log(wordTip);
    if (wordTip.error) {
      setLoading(false);

      return setMsgError(wordTip.msgError);
    }

    const findEqualWords = words.find(objWord => objWord.word === wordTip.word);
    if (findEqualWords) {
      return setMsgError('Você já escreveu essa palavra');
    }

    setLoading(false);
    setWords([...words, wordTip]);
    setTips(state => state + 1);
    await AsyncStorage.setItem(
      '@game',
      JSON.stringify({
        gameId: gameId,
        tipLength: tips + 1,
        arrayWords: [...words, wordTip],
      }),
    );
  }, [gameId, words, tips]);

  return (
    <>
      <Container>
        <Header
          gameId={gameId}
          btnTip={btnTip}
          handleNewTip={handleGetNewTip}
          loading={loading}
        />

        {words.length > 0 && <WordsTry length={words.length} tips={tips} />}

        <Loading isLoading={loading} />

        <MsgError msgError={msgError} />

        <Words words={words} />

        {btnNewGame && (
          <Button onPress={handleNewGame}>
            <TextButton>Novo Jogo</TextButton>
          </Button>
        )}
      </Container>
      <Input handleSendText={text => handleWriteText(text)} />
    </>
  );
};

export default Main;
