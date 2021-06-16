import * as Types from './types'

export const startGame = (payload) => ({
  type: Types.START_GAME,
  payload,
})

export const finishGame = () => ({
  type: Types.FINISH_GAME,
})

export const openCard = (id) => ({
  type: Types.OPEN_CARD,
  payload: id,
})

export const restartGame = () => ({
  type: Types.RESTART_GAME,
})
