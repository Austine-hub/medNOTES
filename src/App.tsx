import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import AccountCards from './components/AccountCards'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'
function App() {
  
  return (
    <>

        <Header/>
        <Navbar/>
        <UserInfo/>
        <main style={{ marginTop: "40px" }}>
        <AccountCards />          
        </main>
        <AccountCards/>
        <AboutUs/>
        <JoinUs/>
        <Footer/>

    </>
  )
}

export default App
