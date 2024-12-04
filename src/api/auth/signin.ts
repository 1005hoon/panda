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
    if (response.status === 400) {
      throw new Error('잘못된 입력값이에요')
    } else if (response.status === 401) {
      throw new Error('이메일 또는 비밀번호가 틀렸어요')
    } else if (response.status === 404) {
      throw new Error('존재하지 않는 사용자에요')
    } else {
      throw new Error('서버 에러가 발생했어요')
    }
  }

  return data
}
