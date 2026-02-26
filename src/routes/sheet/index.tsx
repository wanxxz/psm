import { createFileRoute } from '@tanstack/solid-router'
import { SheetComponent } from '../../components'

function SheetPage() {
  return (
    <div>
      <SheetComponent />
    </div>
  )
}

export const Route = createFileRoute('/_layout/sheet')({
  component: SheetPage
})
