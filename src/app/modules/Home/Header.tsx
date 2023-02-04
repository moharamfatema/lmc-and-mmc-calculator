import React from 'react'

const Header = () => {
    return (
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
					LMC And MMC Caluculator | Excedify
                </span>
            </a>
        </nav>
    )
}

export default Header
