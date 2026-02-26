import { useQuery } from '@tanstack/solid-query'
import { resolveLocale, resolveMessages, resolveTimeZone } from '../locale'
import { type JSX, type Component, children } from 'solid-js'

export const WithIntl: Component<{ children: JSX.Element }> = props => {
  const c = children(() => props.children)

  const { isPending, error, data } = useQuery(() => ({
    queryKey: ['locale'],
    queryFn: async () => {
      const locale = await resolveLocale()
      const messages = await resolveMessages(locale)
      const timeZone = await resolveTimeZone()
      return { locale, messages, timeZone }
    }
  }))

  if (isPending) return null

  if (error) return null

  return <>{c()}</>
}
