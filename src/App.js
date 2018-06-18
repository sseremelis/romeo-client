import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  sendRequest = () => {
    let requestUrl = `${process.env.REACT_APP_API_URL}search`

    fetch(requestUrl, {
      credentials: 'include', // include, same-origin, *omit
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
      },
      mode: 'no-cors'
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
        },
        error => {
          this.setState({
            error
          })
        }
      )
  }

  componentDidMount = () => {
    this.sendRequest()
  }

  render() {
    return <div>hello</div>
  }
}

export default App
