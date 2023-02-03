import React, { FC } from 'react'
import Sym from './components/Sym'
import Datum from './components/Datum'

const Wrap: FC = () => {
    return (
        <div className='wrap flex justify-between gap-2 border-4 border-black px-2 font-bold text-black'>
            <Sym />
            <div className='w-0'></div>
            <Datum />
        </div>
    )
}

export default Wrap
