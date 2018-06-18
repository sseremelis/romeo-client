import styled from 'react-emotion'

export const Tile = styled('div')`
  position: relative;
  font-weight: bold;
  flex: 1 0 50%;
  max-width: 50%;
  border: 0.375rem solid transparent;
  &:hover {
    .hover {
      background: rgba(12, 69, 96, 0.93);
      transform: translateY(0%);
      opacity: 1;
    }
  }
  @media (min-width: 36rem) {
    flex: 1 0 33%;
    max-width: 33%;
  }
  @media (min-width: 48rem) {
    flex: 1 0 25%;
    max-width: 25%;
  }
  @media (min-width: 62rem) {
    flex: 1 0 20%;
    max-width: 20%;
  }
  @media (min-width: 75rem) {
    flex: 1 0 16.6666%;
    max-width: 16.6666%;
  }
`
export const TileInner = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export const TileImage = styled('div')`
  display: block;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: url(${props =>
    props.image
      ? props.image
      : 'https://www.planetromeo.com/assets/8d57f02e10843562b9309a88df396e08.svg'});
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  padding-bottom: 100%;
`
export const TileText = styled('div')`
  background: blue;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  padding: 1rem 0.5rem;
`
export const TileHeader = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Age = styled('div')`
  font-weight: 100;
  padding-right: 6px;
  border-right: 1px solid white;
  margin-right: 6px;
`
export const Name = styled('div')`
  font-weight: 400;
`
export const Status = styled('div')`
  display: block;
  width: 8px;
  height: 8px;
  background: ${props => {
    switch (props.status) {
      case 'ONLINE':
        return '#60D802'
      case 'DATE':
        return '#EC007C'
      default:
        return 'grey'
    }
  }};
  margin-left: 8px;
  border-radius: 50%;
`
export const Location = styled('div')`
  font-weight: 100;
  text-align: center;
  margin-top: 4px;
`
export const HoverInfo = styled('div')`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: auto;
  padding-bottom: 100%;
  height: 0;
  opacity: 0;
  transform: translateY(2%);
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: column-reverse;
`
export const Headline = styled('div')`
  color: white;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.75rem;
`
export const LastOnline = styled('div')`
  color: white;
  font-weight: 100;
  position: absolute;
  top: 0rem;
  left: 0rem;
  padding: 0.75rem;
`
