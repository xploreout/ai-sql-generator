import React from 'react'

interface UserMessage {
  role: string
  content: string
}

interface MessageDisplayProps {
  message: UserMessage
}
const MessageDisplay = ({ message }: MessageDisplayProps) => {
  return (
    <div className='message-display'>
      <p id='icon'>⊚</p>
    {/* {message && console.log(`{message.role} {message.content}`)} */}
      {/* <p>{message.role}</p> */}
      <p> {message.content}</p>
    </div>
  )
}
export default MessageDisplay
