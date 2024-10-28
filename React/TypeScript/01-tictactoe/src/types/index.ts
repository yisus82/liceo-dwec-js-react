export enum Turn {
  PLAYER_1 = 'Player 1 (X)',
  PLAYER_2 = 'Player 2 (O)',
}

export enum Winner {
  PLAYER_1 = 'Player 1 (X)',
  PLAYER_2 = 'Player 2 (O)',
  DRAW = 'Draw',
  NONE = 'None',
}

export enum CellValue {
  PLAYER_1 = 'X',
  PLAYER_2 = 'O',
  EMPTY = '',
}

export type BoardType = CellValue[][];
