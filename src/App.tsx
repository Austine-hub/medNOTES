import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import AccountCards from './components/AccountCards'
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

    </>
  )
}

export default App
