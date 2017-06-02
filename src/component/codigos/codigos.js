import React, { Component } from 'react'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

import '../../App.css'

import CodigosList from './codigos-list'

class Codigos extends Component {
  constructor (...args) {
    super(...args)

    const networkInterface = createNetworkInterface('https://ddm-api.herokuapp.com/graphql')
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    })
  }

  render () {
    return (
      <ApolloProvider client={this.client}>
        <div>
          <RaisedButton label="Default"/>
          <CodigosList />
        </div>
      </ApolloProvider>
    )
  }
}

export default Codigos