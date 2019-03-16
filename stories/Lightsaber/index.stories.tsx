import React from 'react'
import { storiesOf } from '@storybook/react'
import Lightsaber from '../../src/Lightsaber'
import { ELightsaberOwners } from '../../src/Lightsaber/owner'

Object.keys(ELightsaberOwners).map((key) => {
  const owner = ELightsaberOwners[key]

  storiesOf('Lightsaber', module).add(`of ${owner}`, () => (
    <>
      <h2>Simple</h2>

      <div style={{ width: '360px' }}>
        <Lightsaber id="1" owner={owner} />
      </div>

      <div style={{ width: '360px' }}>
        <Lightsaber id="2" owner={owner} initialChecked={true} />
      </div>
    </>
  ))
})
