import React, { Component } from 'react'

import Circle from './Circle'

class LaunchItem extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='row pt-4'>
        <div className='col-sm-6'>
          <h4>
            Mission Name:
            &nbsp;{this.props.launch.mission_name || 'No Mission Name'}
          </h4>
          <h4>
            Launch Date:
            &nbsp;{this.props.launch.launch_date_local || 'No No Launch Date'}
          </h4>
        </div>
        <div className='col-sm-3'>
          <h4>Launch Successful:</h4>
          <Circle
            success={this.props.launch.launch_success}
          />
        </div>
        <div className='col-sm-3'>

        </div>
      </div>
    )
  }
}

export default LaunchItem