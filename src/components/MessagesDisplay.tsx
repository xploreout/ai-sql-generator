import React from 'react'
import MessageDisplay from './MessageDisplay'

interface UserMessage {
  role: string
  content: string
}

interface MessagesDisplayProps {
  userMessages: UserMessage[]
}

const MessagesDisplay = ({ userMessages }: MessagesDisplayProps) => {
  return (
    <>
      <p className='heading'>SQL fun AI</p>
      <div className='messages-display'>
        <div className='messages-quotes'>
          {userMessages.map((userMessage, _index) => (
            <MessageDisplay key={_index} message={userMessage} />
          ))}
        </div>
      </div>
    </>
  )
}
export default MessagesDisplay
