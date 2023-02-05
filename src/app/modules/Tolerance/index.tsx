import React, { FC, ChangeEvent, useContext, useEffect } from 'react'
import { StateContext } from '../../Main'

const Tolerance: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { state, setState }: any = useContext(StateContext)
    const { size, utol, ltol, wtol } = state

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, size: Number(e.target.value) })
    }

    const handleToleranceWidthChange = () => {
        setState({ ...state, wtol: parseFloat((utol - ltol).toPrecision(6)) })
    }

    const handleUtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, utol: Number(e.target.value) })
    }

    const handleLtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, ltol: Number(e.target.value) })
    }

    useEffect(() => {
        handleToleranceWidthChange()
    }, [utol, ltol])

    return (
        <div className='tolerance grid grid-cols-2 gap-2 section '>
            <label htmlFor='size'>Size Dimension</label>
            <input
                step='0.1'
                type='number'
                id='size'
                name='size'
                value={size}
                onChange={handleSizeChange}
            />
            <label htmlFor='utolerance'>Upper Tolerance</label>
            <input
                step='0.1'
                type='number'
                id='utolerance'
                name='utolerance'
                value={utol}
                onChange={handleUtoleranceChange}
            />
            <label htmlFor='ltolerance'>Lower Tolerance</label>
            <input
                step='0.1'
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
