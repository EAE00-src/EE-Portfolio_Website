import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './global_styles/App.scss';

import Layout from './components/Layout';
import Loader from './components/Loader/Loader';
//import Home from './pages/Home/Home';
const Home = lazy(() => import('./pages/Home/Home'));
//import About from './pages/About/About';
const About = lazy(() => import('./pages/About/About'));



function App() {
  

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routes>
        {/*Base Navigation Routes*/}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

        </Route>

        {/*404 Not Found Route*/}
        <Route />
      </Routes>
    </Suspense>
    </>
  )
}

export default App
