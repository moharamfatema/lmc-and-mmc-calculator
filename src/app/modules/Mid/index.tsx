import React, { FC } from 'react'
import ex from '../../../assets/ex.jpeg'
import Hole from './components/Hole'
import Wrap from './components/Wrap'
import Real from './components/Real'

const Mid: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
        <div className='mid grid gap-2 border section'>
            <Hole />
            <div className='ex m-auto flex items-stretch w-full justify-between'>
                <p>Example : </p>
                <img src={ex} alt='Example' />
            </div>
            <Wrap />
            <Real />
        </div>
    )
}

export default Mid
