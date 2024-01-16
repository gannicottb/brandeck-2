import { CardRow } from "@/app/lib/CardRow";
import { parseSheet } from "@/app/lib/Utils";

export interface CardData extends CardRow {
  name: string;
  cost: number;
  type: string;
  subtype: string;
  biome: string;
  bonusEffect: string;
  bonusStars: number;
  bonusStat: number;
  draw: number;
  build: number;
  recruit: number;
  art: string;
  text: string;
}

export async function _parseSheet(csv: string) {
  return parseSheet<CardData>(csv, (data: CardData) => {
    return data
  })
}