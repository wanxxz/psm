import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { Tabulator } from 'tabulator-tables'

export function SheetComponent() {
  const [id] = useState(nanoid())

  useEffect(() => {
    new Tabulator(id)
  }, [id])

  return <div id={id}></div>
}
