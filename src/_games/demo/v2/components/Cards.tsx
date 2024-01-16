import React from "react"
import Card from "./Card"

export default function Cards() {
  const cards = ["card1", "card2", "card3"]
  return (
    <div id='container' className="max-w-96">
      {cards
        .map((c, i) => {
          return <React.Fragment key={i}>
            <Card data={c} />
            {(i > 0 && i % 9 == 0) && <div className="break-before-all" />}
          </React.Fragment>
        })}
    </div>
  )
}