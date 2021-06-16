import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Layout } from '../../components/Layout'

import { restartGame } from '../../stores/game/actions'

export const FinishPage = () => {
  const { push } = useHistory()

  const { username, score } = useSelector((state) => state.game)

  const dispatch = useDispatch()

  if (!username) {
    return <Redirect to="/main" />
  }

  const handleClick = () => {
    dispatch(restartGame())

    push('/main')
  }

  return (
    <Layout>
      <div style={{ marginBottom: '14px' }}>You gained {score} scores</div>
      <div>
        <Button onClick={handleClick}>Restart game</Button>
      </div>
    </Layout>
  )
}
