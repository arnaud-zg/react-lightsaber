import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ReactRenderer from 'react-test-renderer'
import Lightsaber from '../../src/Lightsaber'
import { ELightsaberOwners } from '../../src/Lightsaber/owner'

configure({ adapter: new Adapter() })

describe('Component.Lightsaber()', () => {
  it('should render component', () => {
    const component = ReactRenderer.create(
      <Lightsaber id="1" owner={ELightsaberOwners.OBI_WAN} />,
    )

    let tree = component.toJSON()

    expect(tree).toBeTruthy()
    expect(tree).toMatchSnapshot()
  })

  it('should catch click callback', () => {
    const mockClickCallback = jest.fn()
    const component = shallow(
      <Lightsaber
        id="2"
        owner={ELightsaberOwners.LUKE_SKYWALKER}
        onClick={mockClickCallback}
      />,
    )

    component.find("input[type='checkbox']").simulate('click')
    expect(mockClickCallback.mock.calls.length).toEqual(1)
  })

  it('should test click event without onClick parameter', () => {
    const component = shallow(
      <Lightsaber id="2" owner={ELightsaberOwners.LUKE_SKYWALKER} />,
    )

    component.find("input[type='checkbox']").simulate('click')
    expect(component.html()).toMatchSnapshot()
  })
})
