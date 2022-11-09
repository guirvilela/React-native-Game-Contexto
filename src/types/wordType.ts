export interface IWordType {
  distance: number;
  lemma: string;
  word: string;
}

export interface IGameType {
  gameId: number;
  tipLength: number;
  arrayWords: IWordType[];
}
