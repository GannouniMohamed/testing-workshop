import getTokenFromHeader from '../get-token-from-header'

test('getTokenFromHeader returns null if there is no token', () => {
  const result = getTokenFromHeader({headers: {}})
  expect(result).toBe(null)
})

test('getTokenFromHeader returns null if token is INVALID', () => {
  const result = getTokenFromHeader({headers: {authorization: 'hiiiiii!'}})
  expect(result).toBe(null)
})

test('getTokenFromHeader returns the token from the headers', () => {
  const token = 'hi.mom!'
  const authHeader = `Token ${token}`

  const result = getTokenFromHeader({
    headers: {
      authorization: authHeader,
    },
  })
  expect(result).toBe(token)
})

