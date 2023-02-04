import React from 'react'
import Main from './app/Main'
import './App.css'
import Header from './app/modules/Home/Header'
import Footer from './app/modules/Home/Footer'

function App() {
    return (
        <div className='App flex flex-col h-[100vh]'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
