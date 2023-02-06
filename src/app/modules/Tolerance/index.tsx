import React, { FC, ChangeEvent, useContext } from 'react'
import { StateContext } from '../../Main'
import { round } from '../../../util/maths'

const Tolerance: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { state, setState }: any = useContext(StateContext)
    const { size, utol, ltol, wtol } = state

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, size: Number(e.target.value) })
    }

    const handleUtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            utol: Number(e.target.value),
            wtol: round(Number(e.target.value) - state.ltol),
        })
    }

    const handleLtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            ltol: Number(e.target.value),
            wtol: round(state.utol - Number(e.target.value)),
        })
    }

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
