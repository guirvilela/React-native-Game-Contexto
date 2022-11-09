import axios from 'axios';

export const getDataText = async (text: string, idGame: number) => {
  try {
    const reponse = await axios.get(
      `https://contexto.me/machado/pt-br/game/${idGame}/${text}`,
    );
    return reponse.data;
  } catch (error: any) {
    return {error: true, msgError: error.response.data.error};
  }
};

export const getTip = async (idGame: number, tipNumber: number) => {
  try {
    const reponse = await axios.get(
      `https://contexto.me/machado/pt-br/tip/${idGame}/${tipNumber}`,
    );
    return reponse.data;
  } catch (error: any) {
    return {error: true, msgError: error.response.data.error};
  }
};
