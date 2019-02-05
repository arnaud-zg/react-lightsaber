import React from 'react'
import ReactRenderer from 'react-test-renderer'
import Lightsaber, { ELightsaberOwners } from '../src/Lightsaber'

describe('Component.Lightsaber()', () => {
  it('should render component', () => {
    const component = ReactRenderer.create(
      <Lightsaber id="1" owner={ELightsaberOwners.OBI} />,
    )

    let tree = component.toJSON()

    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
})
