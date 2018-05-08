import React from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'

export class ContentPage extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col sm={12} md={12}>
            <div>Content here</div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

// const mapStateToProps = (state) => ({
//   key: value
// })

// const mapDispatchToProps = {
//   key: value
// }

export default connect(null, null)(ContentPage)
