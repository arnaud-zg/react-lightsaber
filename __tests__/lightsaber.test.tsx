import React from 'react'
import ReactRenderer from 'react-test-renderer'
import Lightsaber from '../src/Lightsaber'
import { ELightsaberOwners } from '../src/Lightsaber/owner'

describe('Component.Lightsaber()', () => {
  it('should render component', () => {
    const component = ReactRenderer.create(
      <Lightsaber id="1" owner={ELightsaberOwners.OBI_WAN} />,
    )

    let tree = component.toJSON()

    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
})
