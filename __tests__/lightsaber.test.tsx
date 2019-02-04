import React from 'react'
import ReactRenderer from 'react-test-renderer'
import Lightsaber from '../src/lightsaber'

describe('Component.Lightsaber()', () => {
  it('should render component', () => {
    const component = ReactRenderer.create(<Lightsaber />)

    let tree = component.toJSON()

    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })
})
