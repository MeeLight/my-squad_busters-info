// Interfaces
import type { IProfileData, IProfileJsonResponse } from '@profile/interfaces'

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

    return `${trophies}`
  }

  public static getGemsOfSeason(data: IProfileData): string {
    const gems = data.resources[2]?.value

    if (typeof gems !== 'number') {
      return '0'
    }

    return `${gems}`
  }

  public static getCurrentHammers(data: IProfileData): string {
    const hammers = data.resources[4]?.value

    if (typeof hammers !== 'number') {
      return '0'
    }

    return `${hammers}`
  }

  public static getPinataSticks(data: IProfileData): string {
    const pinataStick = data.resources[9]?.value

    if (typeof pinataStick !== 'number') {
      return '0'
    }

    return `${pinataStick}`
  }

  public static getStarTokens(data: IProfileData): string {
    const starTokens = data.resources[16]?.value

    if (typeof starTokens !== 'number') {
      return '0'
    }

    return `${starTokens}`
  }

  public static getTickets(data: IProfileData): string {
    const tickets = data.resources[15]?.value

    if (typeof tickets !== 'number') {
      return '0'
    }

    return `${tickets}`
  }
}
