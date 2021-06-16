import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Layout } from '../../components/Layout'

import { startGame } from '../../stores/game/actions'

import styles from './styles.module.css'

export const MainPage = () => {
  const [formData, setFormData] = useState({
    username: '',
  })

  const { push } = useHistory()
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(startGame(formData))

    push('/game')
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          style={{ marginBottom: '1px' }}
          required
        />

        <Button type="submit">Start game</Button>
      </form>
    </Layout>
  )
}
