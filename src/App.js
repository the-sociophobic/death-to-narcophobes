import React from 'react'

import img0 from 'styles/img/0.png'
import img1 from 'styles/img/1.png'
import img2 from 'styles/img/2.png'
import img3 from 'styles/img/3.png'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }

    this.images = [
      img0,
      img1,
      img2,
      img3,
    ]

    this.interval = setInterval(() =>
      this.setState({ index: (this.state.index + 1) % 4}), 555 * 2)
  }

  componentWillUnmount = () =>
    clearInterval(this.interval)

  render = () =>
    <div className="App">
      <img
        className="App__img"
        src={this.images[this.state.index]}
      />
    </div>
}


export default App
