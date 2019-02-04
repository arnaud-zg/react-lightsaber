import { life } from '../src/index'

describe('Method.life()', () => {
  it('should return a valid object', () => {
    expect(life()).toBeTruthy()
    expect(life()).toMatchSnapshot()
  })
})
