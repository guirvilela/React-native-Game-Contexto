import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback} from 'react';
import {getDataText, getTip} from '../../services/getDataText';
import {nextTipDistance} from '../../services/getDistanceTip';
import {IGameType, IWordType} from '../../types/wordType';
import {useForm} from '../share/form';

interface VariablesForm {
  gameId: number;
  words: IWordType[];
  word?: IWordType;
  tips: number;
  msgError: string;
  loading: boolean;
  congrats: boolean;
  btnNewGame: boolean;
  btnTip: boolean;
}

export const useMainController = () => {
  const variablesForm = useForm<VariablesForm>({
    words: [],
    word: undefined,
    msgError: '',
    tips: 0,
    gameId: 0,
    loading: false,
    congrats: false,
    btnNewGame: false,
    btnTip: false,
  });

  React.useEffect(() => {
    // Atualize os botões apenas quando as palavras mudarem
    const {words} = variablesForm.value;
    if (words.length > 0 && words[0]?.distance === 0) {
      variablesForm.set('btnNewGame')(true);
    } else {
      variablesForm.set('btnNewGame')(false);
    }
    if (words.length === 0 || words[0]?.distance > 2) {
      variablesForm.set('btnTip')(true);
    } else {
      variablesForm.set('btnTip')(false);
    }
  }, [variablesForm.value.words]);

  React.useEffect(() => {
    getSavedGame();
  }, []);

  const getSavedGame = async () => {
    variablesForm.set('loading')(true);
    const gameSaved = await AsyncStorage.getItem('@game');
    const game: IGameType = gameSaved ? JSON.parse(gameSaved) : null;
    if (game) {
      variablesForm.setAll({
        gameId: game.gameId,
        tips: game.tipLength,
        words: game.arrayWords,
      });
    }
    variablesForm.set('loading')(false);
  };

  const handleWriteText = useCallback(
    async (text: string) => {
      variablesForm.set('loading')(true);
      const response = await getDataText(
        text.toLowerCase().trim(),
        variablesForm.value.gameId,
      );

      if (response.error && response.msgError) {
        return variablesForm.setAll({
          loading: false,
          msgError: response.msgError,
        });
      }

      const findEqualWords = variablesForm.value.words.some(
        objWord => objWord.distance === response.distance,
      );

      if (findEqualWords) {
        return variablesForm.setAll({
          loading: false,
          msgError: 'Você já escreveu essa palavra',
        });
      }

      variablesForm.set('loading')(false);
      variablesForm.setAll({
        loading: false,
        msgError: undefined,
        word: response,
        words: [...variablesForm.value.words, response],
        congrats: response.distance === 0,
      });

      await AsyncStorage.setItem(
        '@game',
        JSON.stringify({
          gameId: variablesForm.value.gameId,
          tipLength: variablesForm.value.tips,
          arrayWords: [...variablesForm.value.words, response],
        }),
      );
    },
    [variablesForm], // Atualiza a dependência para a referência do objeto
  );

  const handleNewGame = async () => {
    const newGameId = variablesForm.value.gameId + 1;
    variablesForm.set('gameId')(newGameId);
    refreshWords();
    await AsyncStorage.setItem(
      '@game',
      JSON.stringify({
        gameId: newGameId,
        tipLength: 0,
        arrayWords: [],
      }),
    );
  };

  const handleGetNewTip = useCallback(async () => {
    variablesForm.set('loading')(true);
    let lastWord: any[] = [];

    if (variablesForm.value.words.length > 0) {
      lastWord = [
        variablesForm.value.words[0].word,
        variablesForm.value.words[0].distance,
      ];
    }

    const numberTip = nextTipDistance(lastWord, variablesForm.value.words);
    const wordTip = await getTip(variablesForm.value.gameId, numberTip);
    variablesForm.set('loading')(false);

    if (wordTip?.error) {
      return variablesForm.setAll({
        loading: false,
        msgError: wordTip.msgError,
      });
    }

    const findEqualWords = variablesForm.value.words.some(
      objWord => objWord.word === wordTip.word,
    );

    if (findEqualWords) {
      return variablesForm.set('msgError')('Você já escreveu essa palavra');
    }

    variablesForm.setAll({
      loading: false,
      word: wordTip,
      words: [...variablesForm.value.words, wordTip],
      tips: variablesForm.value.tips + 1,
    });

    await AsyncStorage.setItem(
      '@game',
      JSON.stringify({
        gameId: variablesForm.value.gameId,
        tipLength: variablesForm.value.tips + 1,
        arrayWords: [...variablesForm.value.words, wordTip],
      }),
    );
  }, [variablesForm]);

  const refreshWords = useCallback(async () => {
    variablesForm.reset(['gameId']);

    await AsyncStorage.setItem(
      '@game',
      JSON.stringify({
        gameId: variablesForm.value.gameId,
        tipLength: 0,
        arrayWords: [],
      }),
    );
  }, [variablesForm]);

  return {
    variablesForm,
    handleWriteText,
    handleNewGame,
    handleGetNewTip,
    refreshWords,
  };
};
