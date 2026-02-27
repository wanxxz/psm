import { createFileRoute } from '@tanstack/react-router'
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
