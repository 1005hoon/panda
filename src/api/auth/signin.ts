// 서버와의 통신
// - endpoint: auth/signIn
// - method: POST
// - header: { Content-Type: 'application/json' }
// - d {
//   "email": "example@email.com",
//   "password": "password"
// }

export async function signIn(email: string, password: string) {
  const response = await fetch(
    'https://panda-market-api.vercel.app/auth/signIn',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }
  )
  const data = await response.json()

  if (response.ok === false) {
    const errorMessage = data.message || '로그인 중 에러가 발생했어요'
    throw new Error(errorMessage)
  }

  return data
}
