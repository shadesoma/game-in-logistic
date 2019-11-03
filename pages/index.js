import React from 'react'
import Head from 'next/head'
import GameStart from './gameStart'
import '../styles/main.scss'


const Home = () => (
  <div>
    <Head>
      <title>Game start</title>
    </Head>

    <GameStart/>

  </div>
)

export default Home
