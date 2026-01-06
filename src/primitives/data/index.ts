export const dataTypes = ['arrow', 'csv', 'json', 'xlsx'] as const
export type DataTypes = typeof dataTypes
export type DataType = DataTypes[number]

type Data = unknown

export function createLoadData() {
  const loadData = (data: Data): void => {
    // TODO
  }

  return loadData
}

export function createSaveData() {
  const saveData = (): Data => {
    // TODO
    return {}
  }

  return saveData
}

export function createLoadJSON() {
  const loadData = createLoadData()

  const loadJSON = (json: unknown): void => {
    // TODO
    const data = json

    loadData(data)
  }

  return loadJSON
}

export function createSaveJSON() {
  const saveData = createSaveData()

  const saveJSON = (): unknown => {
    const data = saveData()

    // TODO
    const json = data

    return json
  }

  return saveJSON
}

export function createLoadXlsx() {
  const loadData = createLoadData()

  const loadXlsx = (xlsx: unknown): void => {
    // TODO
    const data = xlsx

    loadData(data)
  }

  return loadXlsx
}

export function createSaveXlsx() {
  const saveData = createSaveData()

  const saveXlsx = (): unknown => {
    const data = saveData()

    // TODO
    const xlsx = data

    return xlsx
  }

  return saveXlsx
}
