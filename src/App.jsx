import { Route, Routes } from 'react-router-dom';

import './global_styles/App.scss';

import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';



function App() {
  

  return (
    <>
      <Routes>
        {/*Base Navigation Routes*/}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

        </Route>

        {/*404 Not Found Route*/}
        <Route />
      </Routes>
    </>
  )
}

export default App
