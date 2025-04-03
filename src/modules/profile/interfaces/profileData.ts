import type { IChars } from './characters'

interface IReusableKeyAndValue {
  name: string
  value: number | null
}

export interface IProfileData {
  end_game_milestones: string[]
  emos: string[]
  selEmos: string[]
  chars: IChars
  resources: IReusableKeyAndValue[]
  avatar_stats: IReusableKeyAndValue[]
  variables: IReusableKeyAndValue[]
  other: IReusableKeyAndValue[]
}
