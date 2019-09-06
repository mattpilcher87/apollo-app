import React, { PureComponent } from 'react'

class Circle extends PureComponent {
  render() {
    let fillColour = ''

    switch (this.props.success) {
      case true:
        fillColour = 'green'
        break;
      case false:
        fillColour = 'red'
        break;
      default:
        fillColour = 'yellow'
        break;
    }

    return (
      <svg height='80' width='80'>
        <circle cx='40' cy='40' r='35' fill={fillColour} />
      </svg>
    )
  }
}

export default Circle