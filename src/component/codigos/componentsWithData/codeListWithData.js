import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import WaitCircularProgress from '../../commons/WaitCircularProgress'
import codesQuery from '../query/codesQuery'
import CodeList from '../components/codeList'

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready

function buildGraphql ({data: {loading, codes}}) {
  if (loading) {
    return <WaitCircularProgress/>
  } else {
    return (<CodeList codes={codes}/>)
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (CodigosList here)
export default graphql(gql`${codesQuery}`)(buildGraphql)

/*
 export default function buildComponentGraphql (query, component) {
 debugger
 return graphql(gql`${query}`)(({data: {loading, codes}}) => {
 if (loading) {
 return <WaitCircularProgress/>
 } else {
 return (<component codes={codes}></component>)
 }
 })
 }

 */