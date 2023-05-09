import Head from 'next/head'

// home page
export default function Home() {
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
          <form>
            <input type='text' name='animal' placeholder='enter an animal'/>
            <input type='submit'/>
          </form>
        </main>
      </div>
    </>
  )
}
