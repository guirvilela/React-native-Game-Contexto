import React from 'react';
import {TextError} from './styles';

interface IMsgErrorProps {
  msgError?: string;
}

const MsgError: React.FC<IMsgErrorProps> = ({msgError}) => {
  return <>{msgError?.length > 0 && <TextError>{msgError}</TextError>}</>;
};

export default MsgError;
