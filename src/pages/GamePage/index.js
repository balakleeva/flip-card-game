import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'

import { finishGame } from '../../stores/game/actions'

import styles from './styles.module.css'

export const GamePage = () => {
  const { push } = useHistory()

  const { court, username, closed, isFinished } = useSelector(
    (state) => state.game
  )

  const dispatch = useDispatch()

  const handleFinishGame = () => {
    dispatch(finishGame())
    push('/finish')
  }

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        handleFinishGame()
      }, 1000)
    }
  }, [isFinished])

  if (!username) {
    return <Redirect to="/main" />
  }

  const handleClick = () => {
    handleFinishGame()
  }

  return (
    <Layout>
      <div>
        <div className={styles.court}>
          {court?.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>

        <div style={{ margin: '14px 0', textAlign: 'center' }}>
          {username}, you closed {closed.length / 2} pairs! Keep going
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleClick}>Finish game</Button>
        </div>
      </div>
    </Layout>
  )
}
