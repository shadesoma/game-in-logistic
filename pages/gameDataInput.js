import React from 'react'
import Link from 'next/link'
import '../styles/main.scss'
import TeamName from '../components/teamName'

export default class GameDataInput extends React.Component {

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
        <div className="gameDataInput">
          <TeamName name={this.state.teamName}/>
          <p>Неделя № weekNumber</p>
          <p> descriptionOfConditions № weekNumber</p>
          <table className="firstTable table is-bordered">
            <tbody>
            <tr>
              <th>Неделя № weekNumber</th>
              <th>Звено 1</th>
              <th>Звено 2</th>
              <th>Звено 3</th>
              <th>Звено 4</th>
              <th>Звено 5</th>
            </tr>
            <tr>
              <th/>
              <th/>
              <th/>
              <th/>
              <th/>
              <th/>
            </tr>
            </tbody>
          </table>
          <Link href="/gameDataSet">
            <a className="button is-success is-rounded is-large">
              Загрузить
            </a>
          </Link>
          <footer className="footer">
            <div className="buttons level-right">
              <button className="button is-info is-rounded">Спрос</button>
              <Link href="/gameConditions">
                <a className="button is-link is-rounded">Условия игры</a>
              </Link>
              <button className="button is-link is-rounded">Результаты</button>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
