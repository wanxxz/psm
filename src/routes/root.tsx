import { injectGlobal } from '@emotion/css'
import { createRootRoute, Outlet } from '@tanstack/solid-router'
import { onMount } from 'solid-js'
import { WithIntl, WithQuery } from '../components'

function Root() {
  onMount(() => {
    injectGlobal({
      body: {
        fontFamily: 'sans-serif',
        margin: 0
      }
    })
  })

  return (
    <WithQuery>
      <WithIntl>
        <Outlet />
      </WithIntl>
    </WithQuery>
  )
}

export const Route = createRootRoute({
  component: Root
})
