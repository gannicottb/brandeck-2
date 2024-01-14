export default function Page({ params }: { params: { game: string, version: string } }) {
  // import the Card component and other logic for game/version
  // import cards from Drive for game/version
  // return the cards printed with filtering and options
  return <div>Cards for {params.game} v{params.version}</div>
}