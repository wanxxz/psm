import preview from '../../.storybook/preview'
import { Form, type FormProps } from './form'

const meta = preview.meta({
  title: 'Form',
  component: Form,
  args: {} as FormProps
})

export const Default = meta.story()
