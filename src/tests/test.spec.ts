import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Filipe'

  expect(user.name).toEqual('Filipe')
})