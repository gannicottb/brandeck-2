import Card from "./Card"
import { _parseSheet } from "../lib/parse"
import { Container } from "@/app/components/Container"
import { downloadSheet } from "@/app/lib/Utils"
import { CardPageProps } from "@/app/lib/CardPageProps"

export default async function Cards({ gameVer, size }: CardPageProps) {
  console.log(gameVer)
  const raw = await downloadSheet(gameVer.gameName, gameVer.version)
  const parsed = await _parseSheet(raw)
  return (
    <Container cards={parsed.map((r, i) => <Card data={r} key={i} size={size} />)} />
  )
}