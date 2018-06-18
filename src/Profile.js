import React, { Component } from 'react'

import * as Tile from './TileComponents'

export class Profile extends Component {
  render() {
    const {
      name,
      picture,
      headline,
      last_login,
      online_status: status,
      personal: { age },
      location: { distance }
    } = this.props.profile
    return (
      <Tile.Tile>
        {/* <Tile.TileInner> */}
        <Tile.TileImage image={picture ? picture.url : ''} />
        <Tile.HoverInfo className="hover">
          <Tile.LastOnline>
            Last seen online: {new Date(last_login).toLocaleDateString()} at{' '}
            {new Date(last_login).getHours()}:{new Date(
              last_login
            ).getMinutes()}
          </Tile.LastOnline>
          <Tile.Headline>{headline}</Tile.Headline>
        </Tile.HoverInfo>
        <Tile.TileText>
          <Tile.TileHeader>
            <Tile.Age>{age}</Tile.Age>
            <Tile.Name>{name}</Tile.Name>
            <Tile.Status status={status} />
          </Tile.TileHeader>
          <Tile.Location>{distance} m</Tile.Location>
        </Tile.TileText>
        {/* </Tile.TileInner> */}
      </Tile.Tile>
    )
  }
}

export default Profile
