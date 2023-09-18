import MessagesDisplay from './components/MessagesDisplay'
import ResultDisplay from './components/ResultDisplay'

const App = () => {
  return (
    <div className='app'>
      <MessagesDisplay />
      <input />
      <ResultDisplay />
      <div className='btn-container'>
        <button id='get-query'>Enter Query</button>
        <button id='clear-chat'>Clear</button>
      </div>
    </div>
  )
}

export default App
