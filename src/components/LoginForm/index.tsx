import React, { useMemo } from 'react'
import { useState } from 'hooks'
import cx from 'classnames'

import styles from './loginForm.module.scss'
import { EyeIcon, HideIcon } from 'assets/svgs'

const LoginForm = () => {
  const [emailState, setEmailState] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const inValidEmail = useMemo(() => {
    return emailState !== '' && !emailValid && !emailFocus
  }, [emailState, emailValid, emailFocus])

  const [pwdState, setPwdState] = useState('')
  const [pwdValid, setPwdValid] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)
  const [pwdVisible, setPwdVisible] = useState(false)
  const inValidPwd = useMemo(() => {
    return pwdState !== '' && !pwdValid && !pwdFocus
  }, [pwdState, pwdValid, pwdFocus])

  const emailValidation = (value: string) => {
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/
    return emailRegx.test(value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setEmailState(value)
    setEmailValid(emailValidation(value))
  }

  const handleEmailFocus = () => {
    setEmailFocus((current) => !current)
  }

  const pwdValidation = (value: string) => {
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return pwdRegex.test(value)
  }

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setPwdState(value)
    setPwdValid(pwdValidation(value))
  }

  const handlePwdFocus = () => {
    setPwdFocus((current) => !current)
  }

  const handlePwdVisible = () => {
    setPwdVisible((current) => !current)
  }

  const handleSubmitLogin = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailValid || !pwdValid) return
    console.log('로그인 이벤트시 동작할 로직 작성 하세요')
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogin} className={styles.form}>
        <div className={cx(styles.inputContainer, { [styles.inValid]: inValidEmail })}>
          <input
            className={cx(styles.input, { [styles.inValidInput]: inValidEmail })}
            placeholder='email'
            onChange={handleEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailFocus}
            type='text'
          />
        </div>
        <div className={cx(styles.validationMsg, { [styles.showMsg]: inValidEmail })}>
          올바른 이메일 형식이 아닙니다.
        </div>
        <div
          className={cx(styles.inputContainer, {
            [styles.inValid]: inValidPwd,
          })}
        >
          <input
            className={cx(styles.input, { [styles.inValidInput]: inValidPwd })}
            placeholder='password'
            onChange={handlePwd}
            onFocus={handlePwdFocus}
            onBlur={handlePwdFocus}
            type={pwdVisible ? 'text' : 'password'}
          />
          <div role='button' tabIndex={0} className={styles.iconContainer} onClick={handlePwdVisible}>
            {pwdVisible ? <HideIcon /> : <EyeIcon />}
          </div>
        </div>
        <div className={cx(styles.validationMsg, { [styles.showMsg]: inValidPwd })}>
          소문자,숫자,특수문자를 포함한 최소 8자리 이상입니다.
        </div>
        <button type='submit' className={cx(styles.loginBtn, { [styles.validLoginBtn]: emailValid && pwdValid })}>
          확인
        </button>
      </form>
    </div>
  )
}
export default LoginForm
