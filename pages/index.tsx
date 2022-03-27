import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inicio | MzBlog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-semibold text-center">Welcome <span className="text-blue-800">user</span></h1>
    </div>
  )
}

export default Home
