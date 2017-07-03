import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

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
        <Row center="xs">
          <Col xs={8}>
            {this.state.codes.map(code =>
              <Row start="xs" key={code.id}>
                <Col md={8}>
                  <Link to={{
                    pathname: '/codigos/' + code.id,
                    state: {
                      code: code
                    }
                  }}>

                    <h3>{code.title}</h3>
                  </Link>
                  <p> {code.description}</p>
                </Col>
                <Col md={4}>
                  <h3>Fecha de creacion</h3>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Grid>
    )
  }
}
