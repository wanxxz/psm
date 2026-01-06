const supportedLanguages = ['en']
const defaultLangauge = supportedLanguages[0]

export async function resolveLocale() {
  return defaultLangauge
}

export async function getMessages(locale: string) {
  const module = await import(`./messages/${locale}.json`)
  const messages = module.default
  return messages
}
