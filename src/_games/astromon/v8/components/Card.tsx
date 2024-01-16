import dynamic from "next/dynamic";
import { CardData, CardProps } from "../lib/parse";
import { CardSizes } from "@/app/lib/CardPageProps";
import { ComponentType } from "react";

export default async function Card({ data, size }: { data: CardData, size: string }) {
  const CardOfType: ComponentType<CardProps> = dynamic<CardProps>(() => import(`./${data.type}`))

  return (
    <div className={`
      ${CardSizes[size]}
      bg-white
      flex
      flex-col
      border-solid
      border-2
      border-black
      float-left
      whitespace-pre-line
      box-border
      break-inside-avoid
    `}>
      <CardOfType data={data} />
    </div>
  )
}