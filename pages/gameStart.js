import React from 'react'
import '../styles/main.scss'
import Input from '@material-ui/core/Input';

export default class GameStart extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    if (this.state.value !== '') {
      localStorage.setItem('myData', this.state.value)
      document.location.href = '/gameConditions'
      console.log(this.state.value)
      this.setState({ value: '' })

      event.preventDefault()
    } else {
      alert('Введите название команды!')
    }
  }

  render () {
    return (
      <div className="gameStart">
        <div className="title">
          Игра в логистику
        </div>
        <div className="subtitle">
          END-2-END
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <label>
                <Input className="input primary"
                       type="text"
                       placeholder="Укажите название команды"
                       value={this.state.value}
                       onChange={this.handleChange}/>
              </label>
            </div>
          </div>
          <input className="button is-success is-rounded is-large" type="submit" value="Старт"/>
        </form>

      </div>
    )
  }
}
