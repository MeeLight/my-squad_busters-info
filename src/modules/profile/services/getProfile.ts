// Types and interfaces
import type { IProfileJsonResponse } from './../interfaces/index'
import type { IJsonErrorResponse } from './../interfaces/index'

const API_URI = 'https://boiling-brushlands-05108-5fd29f44600d.herokuapp.com'
type TJsonResponse = IProfileJsonResponse | IJsonErrorResponse

const getProfile = async (
  profileId: string
): Promise<TJsonResponse | undefined> =>
  new Promise(async (resolve, reject): Promise<TJsonResponse | undefined> => {
    const response = await fetch(`${API_URI}/user/${profileId}`)
    const jsonData: TJsonResponse = await response.json()

    try {
      if ('error' in jsonData) {
        reject(jsonData)
        return
      }

      resolve(jsonData)
    } catch (error: unknown) {
      reject(error)
    }
  })

export async function getProfileService(profileId: string) {
  // : Promise<IPlayerJsonResponse | undefined>
  //try {
  const playerData = await getProfile(profileId)

  //console.log({ playerData })

	return playerData
  //if (playerData) return playerData
  /* } catch (error: any) {
    if ('error' in error) {
      console.error(error.error)
    }

    if (error instanceof Error) {
      console.error(error.message)
    }
  } */
}
