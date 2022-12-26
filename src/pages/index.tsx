//libraries
import type { NextPage } from 'next'

//types
import Head from 'next/head'

//components
import Home from '../components/home'

const IndexPage: NextPage = () => {
  return (
    <div className="w-full h-full ">
      <Head>
        <title>فروشگاه دی جی لند</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </div>
  )
}

export default IndexPage
