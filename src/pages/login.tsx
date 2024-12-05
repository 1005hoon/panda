import { signIn } from '@/api/auth/signin'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [loginError, setLoginError] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { email, password } = loginData
    try {
      const auth = await signIn(email, password)
      navigate('/products')
    } catch (error) {
      console.error(error)
      setLoginError((error as Error).message)
    }
  }

  useEffect(() => {
    //.. validation logic
  }, [loginData])

  return (
    <div>
      <h2>login page!</h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 container max-w-lg mx-auto"
      >
        <input
          className="border"
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleValueChange}
        />
        <input
          className="border"
          name="password"
          type="password"
          value={loginData.password}
          onChange={handleValueChange}
        />
        <Button
          type="submit"
          disabled={
            loginData.email === '' ||
            loginData.password === '' ||
            errors.email !== '' ||
            errors.password !== ''
          }
        >
          로그인
        </Button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  )
}
