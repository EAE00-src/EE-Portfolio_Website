import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './global_styles/App.scss';

import Layout from './components/Layout';
import Loader from './components/Loader/Loader';
import Error from './pages/Error/Error';
//lazy import Home
import Home from './pages/Home/Home';
//lazy import About
const About = lazy(() => import('./pages/About/About'));
//lazy import Contact 
const Contact = lazy(() => import('./pages/Contact/Contact'));
//lazy import Portfolio
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));



function App() {
  

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Routes>
        {/*Base Navigation Routes*/}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />

        </Route>

        {/*404 Not Found Route*/}
        {<Route path='/*' element={<Error />} />}
      </Routes>
    </Suspense>
    </>
  )
}

export default App
