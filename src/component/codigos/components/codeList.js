import React, {Component} from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo';
import CodesQuery from '../query/codesQuery'


@graphql(CodesQuery)
export default class CodeList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      codes: this.props.codes
    }

  }
  render () {
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
                {this.state.codes.sort((x, y) => y.votes - x.votes).map(code =>
                  <TableRow key={code.id}>
                    <TableRowColumn><Link to={{
                      pathname: '/codigos/' + code.id,
                      state: {
                        code: code
                      }
                    }}>Codigo detalle</Link>{code.title}</TableRowColumn>
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
