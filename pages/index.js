import Head from 'next/head'
import { useState } from 'react'

// home page
export default function Home() {
  // a counter stored in state
  const [count, setCounter] = useState(0)

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main >
          <img src='/favicon.ico'/>
          <h3>Generate Pet Name</h3>
          <p>You've used this app {count} times</p>
          <form>
            <input type='text' name='animal' placeholder='enter an animal'/>
            <input type='submit' onClick={(e) => {
              e.preventDefault()
              setCounter(count + 1)
            }}/>
          </form>
        </main>
      </div>
    </>
  )
}
