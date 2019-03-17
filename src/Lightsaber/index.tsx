import React from 'react';
import './color.scss';
import { ELightsaberOwners, LIGHTSABER_COLOR_CLASSNAME_MAPPING } from './owner';
import './style.scss';

interface IProps {
  id: string
  initialChecked?: boolean
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  owner: ELightsaberOwners
}

interface IState {
  checked: boolean
}

class Lightsaber extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { initialChecked } = this.props

    this.state = {
      checked: !!initialChecked,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(event: React.MouseEvent<HTMLInputElement>) {
    const { onClick } = this.props
    const { checked } = this.state

    this.setState(
      {
        checked: !checked,
      },
      () => {
        if (onClick) {
          onClick(event)
        }
      },
    )
  }

  render() {
    const { id, owner } = this.props
    const { checked } = this.state

    return (
      <div className="lightsaber-component">
        <input
          defaultChecked={checked}
          id={id}
          onClick={this.handleOnClick}
          type="checkbox"
        />

        <label htmlFor={id} className="lightsaber-component__controller">
          <span className="lightsaber-component__switch">¦¦¦¦</span>
        </label>

        <span
          className={`lightsaber-component__blade ${
            LIGHTSABER_COLOR_CLASSNAME_MAPPING[owner]
          }`}
        />
      </div>
    )
  }
}

export default Lightsaber
