import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'your name'

  expect(user.name).toEqual('your name')
})
