import cytoscape from 'cytoscape'
import { createUniqueId, onMount } from 'solid-js'

export function GraphComponent() {
  const id = createUniqueId()
  let cy!: cytoscape.Core

  onMount(() => {
    cy = cytoscape({
      container: document.getElementById(id)
    })
  })

  return <div id={id}></div>
}
