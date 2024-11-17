import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  randomNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({
      num: randomNum,
    })
  }

  render() {
    const {num} = this.state
    console.log(num)
    return (
      <div className="containe">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" type="button" onClick={this.randomNum}>
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
