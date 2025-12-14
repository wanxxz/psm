import { defineMain } from 'storybook-solidjs-vite'

export default defineMain({
  framework: {
    name: 'storybook-solidjs-vite'
  },
  addons: ['@storybook/addon-vitest'],
  stories: ['../src/**/*.stories.@(ts|tsx)']
})
