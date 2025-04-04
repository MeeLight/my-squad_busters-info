// Promises
import { getProfilePromise } from '@profile/promises/getProfile'

// Types
import type { TProfileServicePromise } from '@profile/types'

// Interfaces
import type { IJsonErrorResponse } from './../interfaces/index'

export async function getProfileService(id: string): TProfileServicePromise {
  try {
    const profileData = await getProfilePromise(id)

    return profileData
  } catch (error: unknown) {
    return error as IJsonErrorResponse
  }
}
