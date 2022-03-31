import Head from 'next/head'
import Featured from '../components/Featured'
import Meals from '../components/Meals'

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Head>
        <title>City View - Abuja</title>
        <meta name="description" content="Best City Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <Meals/>
    </div>
  )
}
