import React from 'react'
import { connect } from 'react-redux'

export default class RecipesPage extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>Recipes here</div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   key: value
// })

// const mapDispatchToProps = {
//   key: value
// }

// export default connect(null, null)(RecipesPage)