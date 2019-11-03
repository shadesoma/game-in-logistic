import React from 'react'
import Link from 'next/link'
import '../styles/main.scss'
import TeamName from '../components/teamName'

export default class GameConditions extends React.Component {

  state = {
    teamName: ''
  }

  componentDidMount() {
    this.setState({teamName: localStorage.getItem('myData')})
    console.log(this.state.teamName)
  }

  render () {
    return (
      <div>
        <div className="gameConditions">
          <TeamName name={this.state.teamName}/>
          <div className="level">
            <div className="">
              <div className="is-size-4 description">
                Описание рынка
              </div>
              <div className="is-size-4 description">
                Описание спроса на товары
              </div>
              <div className="is-size-4 description">
                Описание звеньев цепи поставок
              </div>
            </div>
            <table className="table is-bordered level-right">
              <tbody>
              <tr>
                <th>ФИО игроков</th>
              </tr>
              <tr>
                <th>Петя</th>
              </tr>
              <tr>
                <th>Вася</th>
              </tr>
              <tr>
                <th>Гриша</th>
              </tr>
              </tbody>
            </table>
          </div>
          <Link href="/gameDataInput">
            <a className="button is-success is-rounded is-large">Начать</a>
          </Link>
          <footer className="footer">
            <div className="buttons level-right">
              <button className="button is-info is-rounded">Описание рынка</button>
              <button className="button is-info is-rounded">Описание звеньев</button>
              <button className="button is-info is-rounded">График спроса</button>
              <Link href="/gameDataInput">
                <a className="button is-link is-rounded">Ввод данных</a>
              </Link>
              <button className="button is-link is-rounded">Результаты</button>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
