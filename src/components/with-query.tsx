import { QueryClientProvider } from '@tanstack/solid-query'
import { type Component, type JSX } from 'solid-js'
import { queryClient } from '../query'

export const WithQuery: Component<{ children: JSX.Element }> = props => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
