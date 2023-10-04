import MessagesDisplay from './components/MessagesDisplay'
import ResultDisplay from './components/ResultDisplay'
import React, { useState } from 'react'

interface ChatData {
  role: string
  content: string
}
const App = () => {
  const [dataChat, setDataChat] = useState<ChatData[]>([])
  const [value, setValue] = useState<string>('')
  const getQuery = async () => {
    try {
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: value,
        }),
      }

      const response = await fetch('http://localhost:8000/completions', options)
      const data: ChatData = await response.json()
      const userInput = {
        role: 'user',
        content: value,
      }
      setDataChat((oldData) => [...oldData, data, userInput])
    } catch (error) {
      console.error(error)
    }
  }
  const filteredInputMessages = dataChat.filter((chat) => chat.role === 'user')
  const filteredChatData = dataChat
    .filter((chat) => chat.role === 'assistant')
    .pop()

  const clearQuery = () => {
    setDataChat([])
    setValue('')
  }

  return (
    <div className='app'>
      <MessagesDisplay userMessages={filteredInputMessages} />
      
      <input
        placeholder='Enter request here to generate SQL statements'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ResultDisplay text={filteredChatData?.content || ''} />
      <div className='btn-container'>
        <button onClick={getQuery} id='get-query'>
          Enter Query
        </button>
        <button id='clear-chat' onClick={clearQuery}>
          Clear
        </button>
      </div>
    </div>
  )
}

export default App
