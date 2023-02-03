import React, { FC } from 'react'
import Sym from './components/Sym'
import Datum from './components/Datum'

const Wrap: FC = () => {
    return (
        <div className='wrap grid grid-cols-2 gap-2 border border-black p-2'>
            <Sym />
            <Datum />
        </div>
    )
}

export default Wrap
