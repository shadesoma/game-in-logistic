import React from 'react'
import '../styles/main.scss'
import Link from 'next/link'

export default class GameDataSet extends React.Component {
  render () {
    return (
      <div className="gameDataSet">
        <div className="title">Результаты после Недели № 2</div>
        <div className="subtitle">осталось 10 недель</div>

        <table className="bottomTable table is-bordered  level-right is-mobile">
          <tbody>
          <tr>
            <th>Параметры</th>
            <th>Команда 1</th>
            <th>Команда 2</th>
            <th>Команда 3</th>
            <th>Команда 4</th>
            <th>Команда 5</th>
          </tr>
          <tr>
            <th>Выручка</th>
            <th/>
            <th/>
            <th/>
            <th/>
            <th/>
          </tr>
          <tr>
            <th>Запасы</th>
            <th/>
            <th/>
            <th/>
            <th/>
            <th/>
          </tr>
          <tr>
            <th>SLA</th>
            <th/>
            <th/>
            <th/>
            <th/>
            <th/>
          </tr>
          </tbody>
        </table>

        <footer className="footer">
          <div className="buttons level-right">
            <Link href="/gameDataInput">
              <a className="button is-link is-rounded">Ввод данных</a>
            </Link>
            <Link href="/gameConditions">
              <a className="button is-link is-rounded">Условия игры</a>
            </Link>
          </div>
        </footer>
      </div>
    )
  }

}
