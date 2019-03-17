import {
  ELightsaberOwners,
  ELightsaberColorClassname,
} from '../../src/Lightsaber/owner'

describe('ELightsaberOwners', () => {
  it('should make a snapshot', () => {
    expect(ELightsaberOwners).toMatchSnapshot()
  })
})

describe('ELightsaberColorClassname', () => {
  it('should make a snapshot', () => {
    expect(ELightsaberColorClassname).toMatchSnapshot()
  })
})
