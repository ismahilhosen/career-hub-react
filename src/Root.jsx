import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Root() {
 

  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      
    </>
  )
}

export default Root
