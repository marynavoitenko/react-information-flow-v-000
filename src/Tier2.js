import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import { updateColors, updateChildColors } from './updateColors.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  // if color of Tier 2 changed, need to pass new color to Tier 3
  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  render() {
    return (
      <div onClick={this.props.handleChildClick} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
        <Tier3 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
      </div>
    )
  }
}
