import React, { Component } from 'react'

/// Components
import Header from './c/Header.jsx'
import MainView from './c/MainView.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainView />
      </div>
    )
  }
}

export default App
