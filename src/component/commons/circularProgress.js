import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class WaitCircularProgress extends Component {
  render () {
    return (<div><CircularProgress size={80} thickness={5}/></div>)
  }
}