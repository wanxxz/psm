import { createFileRoute } from '@tanstack/solid-router'
import { GraphComponent } from '../../components'

function GraphPage() {
  return (
    <div>
      <GraphComponent />
    </div>
  )
}

export const Route = createFileRoute('/_layout/graph')({
  component: GraphPage
})
