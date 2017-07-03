import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import conectionGraphql from '../../../commons/graphql/connections'
import '../../../App.css'
import CodeDetailWithData from '../componentsWithData/codeDetailWithData'
import CodeDetail from '../components/codeDetail'

class CodeDetailGraphql extends Component {
  constructor (...args) {
    super(...args)
    this.client = conectionGraphql()
    this.state = {
      idCodigo: this.props.match.params.idCodigo,
      code: this.props.location.state ? this.props.location.state.code : undefined
    }

  }

  render () {

    if (this.state.code) {
      return (<CodeDetail code={this.state.code}/>)
    } else {
      return (
        <ApolloProvider client={this.client}>
          <CodeDetailWithData id={this.state.idCodigo} code2={this.state.code}/>
        </ApolloProvider>
      )
    }
  }
}

export default CodeDetailGraphql