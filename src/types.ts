export type GameMasterData = {
  settings: GameMasterSettings
}

export type GameMasterSettings = {
  partySize: number
  maxBuffStages: number
  buffDivisor: number
}