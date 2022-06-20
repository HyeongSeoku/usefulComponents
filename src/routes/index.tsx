import LoginForm from 'components/LoginForm'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className='App'>
      <div className={styles.container}>
        <div>메인</div>
        <LoginForm />
      </div>
    </div>
  )
}

export default App
