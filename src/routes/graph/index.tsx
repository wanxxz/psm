import { css } from '@emotion/css'
import { createFileRoute } from '@tanstack/solid-router'
import { createEffect, createResource, Show, Suspense } from 'solid-js'

function GraphComponent(props: { module: { default: Function } }) {
  let ref: HTMLDivElement | undefined

  createEffect(() => {
    props.module.default({ container: ref })
  })

  return <div class={css({ position: 'absolute', width: '100%', height: '100%' })} ref={ref}></div>
}

function GraphComponentSuepense() {
  const [module] = createResource(async () => {
    const module = await import('cytoscape')
    return module
  })

  return (
    <Suspense>
      <Show when={module()}>{m => <GraphComponent module={m()} />}</Show>
    </Suspense>
  )
}

export const Route = createFileRoute('/_layout/graph')({
  component: GraphComponentSuepense
})
