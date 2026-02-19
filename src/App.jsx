import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './styles/App.scss'


function App() {
  

  return (
    <>
      <Routes>
        {/*Base Navigation Routes*/}
        <Route path='/' element={<Layout />} >

        </Route>

        {/*404 Not Found Route*/}
        <Route />
      </Routes>
    </>
  )
}

export default App
