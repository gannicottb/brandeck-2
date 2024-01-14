import dynamic from 'next/dynamic'

export default function Page({ params }: { params: { game: string, version: string } }) {
  // import the Card component and other logic for game/version
  const Card = dynamic(() => import(`../../../../_games/${params.game}/v${params.version}/components/Card`))

  // import cards from Drive for game/version
  // return the cards printed with filtering and options


  return <Card data={`${params.game}, v${params.version}`} />
}