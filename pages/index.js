import Head from 'next/head'
import { useState } from 'react'

// home page
export default function Home() {
  // state management variables
  const [count, setCounter] = useState(0)
  const [animalInput, setAnimalInput] = useState('')

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
            <input 
              type='text'
              name='animal'
              value={animalInput}
              onChange={(e) => {
                setAnimalInput(e.target.value)
                console.log(animalInput)
              }}
              placeholder='enter an animal'
              />
            <input type='submit' onClick={(e) => {
              e.preventDefault()
              if (count == 10) {
                return console.log('reached your limit')
              }
              setCounter(count + 1)
            }}/>
          </form>
        </main>
      </div>
    </>
  )
}
