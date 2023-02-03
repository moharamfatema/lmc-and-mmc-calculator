import React from 'react'
import Main from './app/Main'
import './App.css'

function App() {
    return (
        <div className='App flex flex-col h-[100vh]'>
            <nav className='navbar bg-gray-100 flex p-5 font-black shadow-sm  text-black'>
                <a
                    className='navbar-brand flex m-auto justify-between gap-4'
                    href='#'
                >
                    <img
                        src='https://import.cdn.thinkific.com/582390%2Fcustom_site_themes%2Fid%2F5xI9wUZASaKKrFLCTNUU_android-chrome-512x512.png'
                        width='40'
                        height='40'
                        className='d-inline-block align-top'
                        alt='Excedify'
                    />
                    <span className='text-2xl font-bold'>
						LMC And MMC Caluculator
                    </span>
                </a>
            </nav>
            <Main />
            <footer className='footer bg-gray-100 flex p-5 font-black shadow-sm  text-black'>
                <a
                    href='https://www.excedify.com'
                    target='blank'
                    className='m-auto'
                >
					Home
                </a>
            </footer>
        </div>
    )
}

export default App
