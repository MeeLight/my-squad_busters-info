export interface ICharacter {
  data: number
  lvl: number
  userCount: number
  materialC: number[]
  Name: string
  FormationRole: string
  IP: string
  Position: string
  Class: string
}

export interface IChars {
  c: ICharacter[]
  s: number[]
  seen: number[]
  seenSpells: number[]
  lastUnlock: number
  luct: number
  lcmt: number
  lcut: number
}
