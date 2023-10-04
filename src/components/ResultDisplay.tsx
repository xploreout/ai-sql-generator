import React from 'react'

interface ResultProps {
  text: string
}
const ResultDisplay = ({ text }: ResultProps) => {
  return (
    <div className='result-display'>
      <div className='buttons'>
        <div className='button first'></div>
        <div className='button middle'></div>
        <div className='button last'></div>
      </div>
      <div className='result'>
        <p>{text} </p>
      </div>
    </div>
  )
}
export default ResultDisplay
