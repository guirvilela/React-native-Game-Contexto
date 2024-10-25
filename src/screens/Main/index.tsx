import React from 'react';
import {Congratulations} from '../../components/Congratulations';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import MsgError from '../../components/MsgError';
import {Welcome} from '../../components/Welcome';
import Words from '../../components/Words';
import WordsTry from '../../components/WordsTry';
import {useMainController} from '../../hooks/main';
import {Button, ButtonContain, Container, TextButton} from './styles';

export const Main: React.FC = () => {
  const {
    variablesForm,
    handleGetNewTip,
    handleNewGame,
    handleWriteText,
    refreshWords,
  } = useMainController();
  return (
    <>
      <Container>
        {variablesForm.value.words.length ? (
          <Header
            gameId={variablesForm.value.gameId}
            btnTip={variablesForm.value.btnTip}
            btnRefresh={!variablesForm.value.congrats}
            handleNewTip={handleGetNewTip}
            handleRefreshGame={refreshWords}
            loading={variablesForm.value.loading}
          />
        ) : (
          <Header
            gameId={variablesForm.value.gameId ?? undefined}
            btnTip={false}
            btnRefresh={false}
            handleNewTip={console.log}
            handleRefreshGame={console.log}
            loading={false}
          />
        )}

        {variablesForm.value.congrats && (
          <Congratulations
            gameId={variablesForm.value.gameId}
            tryNumber={variablesForm.value.words.length}
            tipNumber={variablesForm.value.tips}
          />
        )}

        {variablesForm.value.words.length ? (
          !variablesForm.value.congrats && (
            <WordsTry
              length={variablesForm.value.words.length}
              tips={variablesForm.value.tips}
            />
          )
        ) : (
          <Welcome />
        )}

        <Loading isLoading={variablesForm.value.loading} />

        <MsgError msgError={variablesForm.value.msgError} />

        {variablesForm.value.words.length ? (
          <Words
            words={variablesForm.value.words}
            lastWord={variablesForm.value.word}
          />
        ) : (
          <></>
        )}
      </Container>

      {variablesForm.value.btnNewGame && (
        <ButtonContain>
          <Button onPress={handleNewGame}>
            <TextButton>Novo Jogo</TextButton>
          </Button>
        </ButtonContain>
      )}
      <Input
        handleSendText={text => handleWriteText(text)}
        disabled={variablesForm.value.congrats}
      />
    </>
  );
};
