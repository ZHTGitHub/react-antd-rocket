import './App.css'
import { Home } from './views'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Home></Home>
      </Provider>
    </div>
  )
}

export default App
