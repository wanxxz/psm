import { createUniqueId, onMount } from 'solid-js'
import { Tabulator } from 'tabulator-tables'

export function SheetComponent() {
  const id = createUniqueId()

  onMount(() => {
    new Tabulator(id)
  })

  return <div id={id}></div>
}
