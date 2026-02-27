import cytoscape from 'cytoscape'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

export function GraphComponent() {
  const [id] = useState(nanoid())
  let cy!: cytoscape.Core

  useEffect(() => {
    cy = cytoscape({
      container: document.getElementById(id)
    })
  }, [id])

  return <div id={id}></div>
}
