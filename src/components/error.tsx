import { ErrorComponent, type ErrorComponentProps } from '@tanstack/solid-router'

function CustomErrorComponent(props: ErrorComponentProps) {
  console.error(props.error)

  return <ErrorComponent error={props.error} />
}

export { CustomErrorComponent as ErrorComponent }
