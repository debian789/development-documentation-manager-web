import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import conectionGraphql from '../../../commons/graphql/connections'
import '../../../App.css'
import CodeList from '../componentsWithData/codeListWithData'

class CodeListGraphql extends Component {
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

export default CodeListGraphql