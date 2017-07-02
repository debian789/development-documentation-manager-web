import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import CircularProgress from 'material-ui/CircularProgress'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { Grid, Row, Col } from 'react-flexbox-grid'

// import PostUpvoter from './PostUpvoter';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
function CodigosList ({data: {loading, codes}}) {
  if (loading) {
    return <div><CircularProgress size={80} thickness={5}/></div>
  } else {

    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
          <Table >
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {codes.sort((x, y) => y.votes - x.votes).map(code =>
                <TableRow key={code.id}>
                  <TableRowColumn>{code.id}</TableRowColumn>
                  <TableRowColumn>{code.title}</TableRowColumn>
                  <TableRowColumn>{code.description}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (CodigosList here)
export default graphql(gql`
  query {
    codes {
      id
      title
    }
  }
`)(CodigosList)