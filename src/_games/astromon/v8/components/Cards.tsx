import { _parseSheet } from "../lib/parse"
import { Container } from "@/app/components/Container"
import { downloadSheet, mapArtURL } from "@/app/lib/Utils"
import { RedisRTC } from "@/app/lib/RedisRTC"
import { CardPageProps } from "@/app/lib/CardPageProps"
import Card from "./Card"

const artURLCache = new RedisRTC<string>("astromon:art", (artName) => mapArtURL("astromon", artName))

export default async function Cards({ gameVer, size }: CardPageProps) {
  const raw = await downloadSheet(gameVer.gameName, gameVer.version)
  const parsed = await _parseSheet(raw)
  // Resolve art names to urls (cached)
  const cards = await Promise.all(parsed.map(async (c) => {
    const artURL = await artURLCache.get(c.art)
    c.art = artURL
    return c;
  }))
  return (
    <Container cards={cards.map((r, i) => <Card data={r} key={i} size={size} />)} />
  )
}