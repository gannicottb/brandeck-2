import Image from 'next/image'
import { CardProps } from "../lib/parse"

export default async function Mon({ data }: CardProps) {
  return (
    <>
      <div className="text-black">{data.name}</div>
      <div className="text-black">{data.type}</div>
      <div className="text-blue">{data.cost}</div>
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
    </>
  )
}