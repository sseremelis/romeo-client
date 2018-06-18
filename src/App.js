import React, { Component } from 'react'
import styled from 'react-emotion'

import { Profile } from './Profile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [{ personal: { age: '' }, location: { distance: '' } }]
    }
  }

  sendRequest = requestUrl => {
    return new Promise((resolve, reject) => {
      fetch(requestUrl)
        .then(res => res.json())
        .then(
          result => {
            resolve(result)
          },
          error => {
            this.setState({
              error
            })
            console.log(error)
            reject(error)
          }
        )
    })
  }

  componentDidMount = () => {
    this.sendRequest(`${process.env.REACT_APP_API_URL}search?sorting=DISTANCE`)
      .then(result => {
        let requestParams = `${process.env.REACT_APP_API_URL}profiles?`
        result.items.map(res => (requestParams += `ids=${res.id}&`))

        return this.sendRequest(requestParams)
      })
      .then(result => {
        console.log(result)
        this.setState({
          profiles: result
        })
      })
  }

  render() {
    return (
      <TilesWrapper>
        {this.state.profiles.map((item, index) => (
          <Profile key={index} profile={item} />
        ))}
      </TilesWrapper>
    )
  }
}

export default App

const TilesWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
`
