import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Items extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={i}>{item.category}</li>
        ))}
      </ul>
    )
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired
}