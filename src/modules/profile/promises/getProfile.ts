// Types
import type { TProfileJsonData } from '@profile/types'
import type { TProfileServicePromise } from '@profile/types'

export const getProfilePromise = (id: string): TProfileServicePromise => {
  const API_URI = 'https://boiling-brushlands-05108-5fd29f44600d.herokuapp.com'
  const ONE_AND_A_HALF_SECONDS = 1500

  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(`${API_URI}/user/${id}`)
      const jsonData: TProfileJsonData = await response.json()

      if ('error' in jsonData) {
        reject(jsonData)
        return
      }

      resolve(jsonData)
    }, ONE_AND_A_HALF_SECONDS)
  })
}
