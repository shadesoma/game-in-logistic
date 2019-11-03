import React from 'react'
import '../styles/main.scss'

export default class TeamName extends React.Component {
  render () {
    return (
      <h1 className="title">{this.props.name}</h1>
    )
  }
}
