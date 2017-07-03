
import ApolloClient, { createNetworkInterface } from 'apollo-client'

export default function conectionGraphql () {
  const networkInterface = createNetworkInterface('https://ddm-api.herokuapp.com/graphql')
  return new ApolloClient({
    networkInterface,
    dataIdFromObject: r => r.id,
  })
}


