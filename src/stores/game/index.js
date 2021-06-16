import * as Types from './types'
import { v4 as uuidv4 } from 'uuid'
import { cards } from '../../cards'

const initialState = {
  username: '',
  court: generateCourt(),
  opened: [],
  closed: [],
  isFinished: false,
  score: 0,
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case Types.START_GAME:
      return {
        ...state,
        ...payload,
        court: generateCourt(),
      }

    case Types.OPEN_CARD:
      let opened = []

      if (state.opened.find((item) => item.id === payload.id)) {
        opened = state.opened.filter((item) => item.id !== payload.id)
      } else if (state.opened.length < 2) {
        opened = state.opened.concat(payload)
      } else if (state.opened.length >= 2) {
        opened = [payload]
      }

      let closed = state.closed
      if (opened.length === 2) {
        if (opened[0].figure === opened[1].figure) {
          closed = state.closed.concat(...opened)
        }
      }

      return {
        ...state,
        opened,
        closed,
        score: closed.length * 2,
        isFinished: closed.length === state.court.length,
      }

    case Types.FINISH_GAME:
      return {
        ...state,
        score: state.closed.length * 2,
        isFinished: true,
      }

    case Types.RESTART_GAME:
      return initialState

    default: {
      return state
    }
  }
}

function generateCourt() {
  let newArray = cards.concat(cards).map((figure) => ({
    id: uuidv4(),
    figure,
  }))

  for (let i = 0; i <= newArray.length - 1; i++) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[rand]] = [newArray[rand], newArray[i]]
  }

  return newArray
}
