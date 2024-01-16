import { CardProps } from "../lib/parse"

export default async function Reference({ data }: CardProps) {
  return (
    <>
      <div className="text-black">{data.name}</div>
      <div className="text-black"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </>
  )
}