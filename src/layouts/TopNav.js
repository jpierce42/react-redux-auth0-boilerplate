import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Navbar, Button } from 'react-bootstrap'

class TopNav extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My App</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  onClick={this.login.bind(this)}
                >
                  Log In
                </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                </Button>
              )
            }
          </Navbar.Form>
          <Navbar.Text pullRight>
            { isAuthenticated() && (
              'Welcome!'
              )
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

TopNav.propTypes = {
  auth: PropTypes.object
}

export default TopNav
