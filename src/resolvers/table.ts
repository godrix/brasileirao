import { TableService } from '../data/datasource/http'
import { LeagueTable } from '../data/models'
import { extractedData } from '../services'

export const table = async (liga:LeagueTable) => {
  const promises = [
    TableService('GE', liga),
    TableService('CNN', liga)
  ]
  const result = await Promise.any(promises)

  return extractedData(result.data, result.provider)

}