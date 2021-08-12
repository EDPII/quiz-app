import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App | Home</title>
      </Head>
      <div className={styles.questionContainer}>
        <header>
          Question 1
        </header>
        <main>
        In Animal Crossing: New Leaf, which of these paintings from Redd&#039;s Art Gallery is always genuine?
        </main>
        <div className={styles.answerContainer}>
         <button> 
          Warm Painting
         </button>
         <button> 
          Jolly Painting
         </button>
         <button> 
          Neutral Painting
         </button>
         <button> 
          Wistful Painting
         </button>
        </div>
        <button className={styles.submitButton}>
          Submit
        </button>
      </div>
      
       
    </div>
  )
}

export default Home
