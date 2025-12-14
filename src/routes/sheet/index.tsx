import { css } from '@emotion/css'
import { createFileRoute } from '@tanstack/solid-router'
import { createUniqueId, onMount } from 'solid-js'
import { Tabulator } from 'tabulator-tables'

function SheetComponent() {
  const id = createUniqueId()

  onMount(() => {
    new Tabulator(id)
  })

  return <div id={id} class={css({ position: 'absolute', width: '100%', height: '100%' })}></div>
}

export const Route = createFileRoute('/_layout/sheet')({
  component: SheetComponent
})
