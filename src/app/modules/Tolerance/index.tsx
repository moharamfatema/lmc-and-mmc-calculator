import React, { FC, ChangeEvent, useContext, useEffect } from 'react'
import { StateContext } from '../../Main'

const Tolerance: FC<{
	wtol: number
	setWtol: (wtol: number) => void
}> = ({ wtol, setWtol }) => {
    const { state, setState }: any = useContext(StateContext)

    const { size, utol, ltol } = state

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, size: Number(e.target.value) })
    }

    const handleToleranceWidthChange = () => {
        setWtol(utol - ltol)
    }

    const handleUtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, utol: Number(e.target.value) })
        handleToleranceWidthChange()
    }

    const handleLtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, ltol: Number(e.target.value) })
        handleToleranceWidthChange()
    }

    return (
        <div className='tolerance grid grid-cols-2 gap-2 section '>
            <label htmlFor='size'>Size Dimension</label>
            <input
                type='number'
                id='size'
                name='size'
                value={size}
                onChange={handleSizeChange}
            />
            <label htmlFor='utolerance'>Upper Tolerance</label>
            <input
                type='number'
                id='utolerance'
                name='utolerance'
                value={utol}
                onChange={handleUtoleranceChange}
            />
            <label htmlFor='ltolerance'>Lower Tolerance</label>
            <input
                type='number'
                id='ltolerance'
                name='ltolerance'
                value={ltol}
                onChange={handleLtoleranceChange}
            />
            <p className='label'>Tolerance Width</p>
            <p className='value'>{wtol}</p>
        </div>
    )
}

export default Tolerance
