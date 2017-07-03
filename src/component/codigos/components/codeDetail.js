import React, { Component } from 'react'

export default class CodigoDetail extends Component {

  constructor (props) {
    super(props)

    /*
     this.state = {
     idCodigos: this.props.match.params.idCodigo,
     code: this.props.location.state ? this.props.location.state.code : {}
     }*/

  }

  render () {
    return (
      <div>
        <h1>{this.props.code.title}</h1>
        <input type="text" value={this.props.code.title}/>
        <h1>{this.props.code.description}</h1>
        <input type="text" value={this.props.code.description}/>


        <h1>{this.props.code.code}</h1>
        <input type="text" value={this.props.code.code}/>

      </div>
    )
  }
}