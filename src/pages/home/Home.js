import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <Grid>
        <Row>
          <Col sm={12} md={12}>
            {
              isAuthenticated() && (
                  <div>
                    <h4>You are logged in!</h4>
                    <a href="/recipes">Go to Recipes</a>
                  </div>
                )
            }
            {
              !isAuthenticated() && (
                  <h4>
                    You are not logged in! Please{' '}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </a>
                    {' '}to continue.
                  </h4>
                )
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
