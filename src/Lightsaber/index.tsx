import React from 'react'
import './style.scss'

export enum ELightsaberOwners {
  YODA = 'yoda',
  VADER = 'vader',
  WINDU = 'windu',
  OBI = 'obi-wan',
}

interface IProps {
  id: string
  owner: ELightsaberOwners
}

const Lightsaber = (props: IProps) => {
  const { id, owner } = props

  return (
    <div className="lightsaber-component">
      <input type="checkbox" id={id} className={`jedi jedi--${owner}`} />
    </div>
  )
}

export default Lightsaber
