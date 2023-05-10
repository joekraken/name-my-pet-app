import Head from 'next/head'
import { useState } from 'react'
import styles from './styles/index.module.css'

// home page
export default function Home() {
  // state management variables
  const [count, setCounter] = useState(0)
  const [animalInput, setAnimalInput] = useState('')
  const [result, setResult] = useState()

  // fires on form submit event
  async function onSubmit(e) {
    try {
      if (count == 10) {
        return console.log('reached your limit')
      }
      e.preventDefault()
      // network POST request
      const response = await fetch('/api/generate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({animal: animalInput})
      })
      const data = await response.json()
      // check HTTP status, throw error if not '200' success
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`)
      }
      setCounter(count + 1)
      setAnimalInput('')
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }
  return (
      <div className={styles.body}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <img src='/favicon.ico' className={styles.icon}/>
          <h3>Generate Pet Name</h3>
          <form onSubmit={onSubmit}>
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
            <input type='submit'
              value='generate names'
            />
          </form>
          <div className={styles.result}>{result}</div>
        </main>
      </div>
  )
}
