import { QueryClientProvider } from '@tanstack/solid-query'
import { children, type Component, type JSX } from 'solid-js'
import { queryClient } from '../query'

export const WithQuery: Component<{ children: JSX.Element }> = props => {
  const c = children(() => props.children)
  return <QueryClientProvider client={queryClient}>{c()}</QueryClientProvider>
}
