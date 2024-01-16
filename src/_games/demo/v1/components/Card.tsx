import { CardSizes } from "@/app/lib/CardPageProps";
import { CardData } from "../lib/parse";
import Image from 'next/image'

export default function Card({ data, size }: { data: CardData, size: string }) {
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
      <div className="text-xl font-medium text-black">{data.name}</div>
      <div className="text-xl font-medium text-black">{data.power}</div>
      <div className="relative w-full h-1/2 m-0 bg-gray-400">
        <Image
          className="max-w-full max-h-full mt-auto mb-auto object-contain"
          src={data.art}
          fill={true}
          alt="art"
          referrerPolicy="no-referrer"
        /></div>
      <div className="text-xl font-medium text-black">{data.text}</div>
    </div>
  )
}