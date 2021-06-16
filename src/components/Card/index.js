import { useDispatch, useSelector } from 'react-redux'

import { openCard } from '../../stores/game/actions'

import styles from './styles.module.css'

export const Card = ({ data }) => {
  const { id, figure } = data

  const { opened, closed } = useSelector((state) => state.game)

  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(openCard(id))
  }

  const isOpened = opened.find((item) => item.id === data.id)
  const isClosed = closed.find((item) => item.id === data.id)
  const isVisible = isOpened || isClosed

  return (
    <div key={id} className={styles.card} onClick={() => handleClick(data)}>
      <div
        className={styles.innerCard}
        style={{ transform: isVisible ? 'rotateY(180deg)' : 'unset' }}
      >
        <div className={styles.frontCard} />
        {isVisible && (
          <div
            className={styles.backCard}
            style={{ filter: isClosed ? 'opacity(0.5)' : 'none' }}
          >
            <img className={styles.cardImage} src={figure} />
          </div>
        )}
      </div>
    </div>
  )
}
