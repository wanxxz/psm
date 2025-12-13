import { css } from '@emotion/css'
import { createFileRoute } from '@tanstack/solid-router'
import { createEffect, createResource, createSignal, Show, Suspense } from 'solid-js'

function SheetComponent(props: { module: { default: Function } }) {
  const [data] = createSignal([])
  let ref: HTMLDivElement | undefined

  createEffect(() => {
    const el = props.module.default({ data })
    ref?.appendChild(el)
  })

  return <div class={css({ position: 'absolute', width: '100%', height: '100%' })} ref={ref}></div>
}

function SheetComponentSuepense() {
  const [module] = createResource(async () => {
    const module = await import('canvas-datagrid')
    return module
  })

  return (
    <Suspense>
      <Show when={module()}>{m => <SheetComponent module={m()} />}</Show>
    </Suspense>
  )
}

export const Route = createFileRoute('/_layout/sheet')({
  component: SheetComponentSuepense
})
