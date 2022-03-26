import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Outlet></Outlet>
      </Provider>
    </div>
  )
}

export default App
