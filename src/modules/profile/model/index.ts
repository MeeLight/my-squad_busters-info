// Interfaces
import type { IProfileData, IProfileJsonResponse } from '@profile/interfaces'

const getFormatValue = (value: number): string => {
  const formatted = `${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)}`

  return formatted
    .substring(1, formatted.length - 2)
    .replace('.', '')
    .replaceAll(',', '.')
}

export default class ProfileModel {
  public static getProfileData(data: IProfileJsonResponse): IProfileData {
    const parsedData: IProfileData = JSON.parse(data.jsonStr)

    return parsedData
  }

  public static getProfileLevel(data: IProfileData): string {
    return `${data.other[0].value}`
  }

  public static getCurrentTrophies(data: IProfileData): string {
    const trophies = data.other[2]?.value

    if (typeof trophies !== 'number') {
      return '0'
    }

    return `${getFormatValue(trophies)}`
  }

  public static getGemsOfSeason(data: IProfileData): string {
    const gems = data.resources[2]?.value

    if (typeof gems !== 'number') {
      return '0'
    }

    return `${getFormatValue(gems)}`
  }

  public static getCurrentHammers(data: IProfileData): string {
    const hammers = data.resources[4]?.value

    if (typeof hammers !== 'number') {
      return '0'
    }

    return `${getFormatValue(hammers)}`
  }

  public static getPinataSticks(data: IProfileData): string {
    const pinataStick = data.resources[9]?.value

    if (typeof pinataStick !== 'number') {
      return '0'
    }

    return `${getFormatValue(pinataStick)}`
  }

  public static getStarTokens(data: IProfileData): string {
    const starTokens = data.resources[16]?.value

    if (typeof starTokens !== 'number') {
      return '0'
    }

    return `${getFormatValue(starTokens)}`
  }

  public static getTickets(data: IProfileData): string {
    const tickets = data.resources[15]?.value

    if (typeof tickets !== 'number') {
      return '0'
    }

    return `${getFormatValue(tickets)}`
  }
}
