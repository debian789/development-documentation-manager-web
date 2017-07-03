import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import WaitCircularProgress from '../../commons/WaitCircularProgress'
import codeQuery from '../query/codeQuery'
import CodeDetail from '../components/codeDetail'

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready

function buildGraphql ({data: {loading, code, variables,todos}}) {
  debugger
  if (loading) {
    return <WaitCircularProgress/>
  } else {
    debugger
    return (<CodeDetail code={code}/>)
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (CodigosList here)
export default graphql(codeQuery, {
  options: (props) => ({
    variables: {
      id: props.id,
    },
  }),
})(buildGraphql)
