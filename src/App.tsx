import './App.css'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './sliceReducer'
import SampleTest from './sampleTest'

function App() {
 
  const dispatch = useDispatch()
  return (
    <div className="App">
     <p>
      hello world
     </p>
     <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <SampleTest/>
    </div>
  )
}

export default App
