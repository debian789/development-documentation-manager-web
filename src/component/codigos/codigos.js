import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import '../../App.css';

import PostList from './PostList';

class Codigos extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('https://ddm-api.herokuapp.com/graphql');
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <PostList />
      </ApolloProvider>
    );
  }
}

export default Codigos;