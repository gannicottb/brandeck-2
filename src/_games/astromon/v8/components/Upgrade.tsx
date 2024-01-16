import { CardData } from "../lib/parse"
import Image from 'next/image'

interface CardProps {
  data: CardData,
  size: string
}

export const Upgrade: React.FC<CardProps> = ({ data, size }) => {
  return (
    <div className={
      `
      w-[232.5px]
      h-[325.5px]
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
    `
    }>
      <div className="text-black">{data.name}</div>
      {data.art != "unknown" && <div className="relative w-full h-[38%] ml-auto mr-auto">
        <Image
          className="max-w-full max-h-full mt-auto mb-auto object-contain"
          src={data.art}
          fill={true}
          alt="art"
          referrerPolicy="no-referrer"
        />
      </div>}
      <div className="text-black"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </div>
  )
}