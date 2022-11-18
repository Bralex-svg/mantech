import dayjs from "dayjs";
import chessimage from "../assets/chess.jpg";

export const TableHeader: string[] = [
  "GAMEID",
  "LIMIT",
  "ENTRY FEE",
  "NO. OF PLAYERS",
  "DATE CREATED",
];

export const FinishGameTableHead: string[] = [
  "GAMEID",
  "LIMIT",
  "WINNER",
  "AMOUNT WON",
  "DATE ENDED",
];

export interface IGame {
  id: number;
  limit: number;
  entryFee: number;
  numberOfPlayers: number;
  dateCreated: string;
}

export interface IGameResults {
  id: number;
  limit: number;
  winner: string;
  amount: number;
  dateEnded: string;
}

export function getGameData(length = 30): IGame[] {
  const data: IGame[] = [];

  let count = 0;
  Array.from({ length: length }).map(() => {
    count += 1;
    data.push({
      id: count,
      limit: Math.floor(Math.random() * 15),
      entryFee: parseFloat((Math.random() * 35).toFixed(2)),
      numberOfPlayers: Math.floor(Math.random() * count + 1),
      dateCreated: dayjs().format("DD/MM/YYYY"),
    });
  });

  return data;
}

export function getGameResults(length = 30): IGameResults[] {
  const data: IGameResults[] = [];

  let count = 0;
  Array.from({ length: length }).map(() => {
    count += 1;
    data.push({
      id: count,
      limit: Math.floor(Math.random() * 15),
      amount: parseFloat((Math.random() * 35).toFixed(2)),
      winner: `0xoo4...103430`,
      dateEnded: dayjs().format("DD/MM/YYYY"),
    });
  });

  return data;
}

export const resources = {
  chessimage,
};
