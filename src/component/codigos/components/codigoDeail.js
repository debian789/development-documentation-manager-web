import React, { Component } from 'react'


export default class CodigoDetail extends Component {

  constructor (props) {
    super(props)


    this.state = {
      idCodigos: this.props.match.params.idCodigo,
      code: this.props.location.state ? this.props.location.state.code : {}
    }

  }

  render () {
    return (
      <div>
        <div>detalle codigo {this.state.idCodigos}</div>
        <h1>{this.state.code.title}</h1>
      </div>
    )
  }
}