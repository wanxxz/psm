import { Provider } from '@react-spectrum/s2'
import { useRouter, type NavigateOptions, type ToOptions } from '@tanstack/react-router'
import { type PropsWithChildren } from 'react'

export function WithRS(props: PropsWithChildren) {
  let router = useRouter()
  return (
    <Provider
      background="base"
      router={{
        navigate: (href, opts) => {
          if (typeof href === 'string') return
          return router.navigate({ href, ...opts })
        },
        useHref: href => {
          if (typeof href === 'string') return href
          return router.buildLocation(href).href
        }
      }}
    >
      {props.children}
    </Provider>
  )
}

declare module '@react-spectrum/s2' {
  interface RouterConfig {
    href: ToOptions
    routerOptions: Omit<NavigateOptions, keyof ToOptions>
  }
}
