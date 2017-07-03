import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import conectionGraphql from '../../commons/graphql/connections'
import '../../App.css'
import CodeList from './components/codeList'

class Codigos extends Component {
  constructor (...args) {
    super(...args)
    this.client = conectionGraphql()
  }

  render () {
    return (
      <ApolloProvider client={this.client}>
        <CodeList/>
      </ApolloProvider>
    )
  }
}

export default Codigos