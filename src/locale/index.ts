import type { default as En } from '../../public/messages/en.json'

export type Locale = 'en'
export type Messages = typeof En

const supportedLanguages = ['en'] as const
const defaultLangauge = supportedLanguages[0]

export async function resolveLocale(): Promise<Locale> {
  return defaultLangauge
}

export async function resolveMessages(locale: Locale): Promise<Messages> {
  const res = await fetch(`/messages/${locale}.json`)
  const messages = res.json()
  return messages
}

const defaultTimeZone = 'UTC' as const
export async function resolveTimeZone() {
  return defaultTimeZone
}
