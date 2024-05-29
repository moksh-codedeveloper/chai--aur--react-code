import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './'
import Home from './components/Home/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx';
//1st method 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])
/*
  in both methods of route the nesting is possible some of them are readable that defers  
 */
//2nd method for Routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path=''element={<Home/>} />
      <Route path='about'element={<About/>} />
      <Route path='contact'element={<Contact/>} />
      <Route path='user/:id'element={<User/>} />
      <Route loader={githubInfoLoader}
       path='github'element={<Github/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* it wraps all of data provided  */}
  </React.StrictMode>,
)
