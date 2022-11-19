import Head from 'next/head'
import { useState } from 'react'
import { Card } from "../components/Card"
import Header from '../components/Header/Header'
import Data from '../data/Data'


const Home = () => {

  // total messages
  const [Messages, setMessages] = useState(Data)

  // unread messages
  const [count, setCount] = useState(Data.filter(data => data.isUnread).length)

  // mark all as read
  function handleMark() {
    setCount(0)
    setMessages(prevMessages => prevMessages.map(data => {
      return {
        ...data,
        isUnread: false
      }
    }))
  }
 
  return (
    <>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Notification Page" />
      </Head>

      
      <div className='[ bg-white ] [ h-full sm:h-auto ] [ px-4 py-6 sm:p-8 sm:mx-4 sm:my-8 ] [ lg:w-6/12 lg:mx-auto ] [ rounded-none sm:rounded-2xl ]'>
          <div className='stack'> 
            <Header 
              count={count} 
              handleMark={handleMark} 
            />        
            <main className='stack stack-sm'>
              {Messages.map(data => (
                <Card
                  key={data.id}
                  data={data} 
                />
              ))}
            </main>   
          </div>
      </div>
    </>
  )
}

export default Home