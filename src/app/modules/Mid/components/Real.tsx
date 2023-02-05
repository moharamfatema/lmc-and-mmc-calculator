import React, { FC } from 'react'
import { StateContext } from '../../../Main'
import { IState } from '../../../../types'

const Real: FC = () => {
    const {
        state,
        setState,
    }: {
		state: IState
		setState: React.Dispatch<React.SetStateAction<IState>>
	} = React.useContext(StateContext)

    const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const read = parseFloat(e.target.value)
        let err = false
        let msg = ''
        if (read < state.size + state.ltol || read > state.size + state.utol) {
            err = true
            msg = 'Measured value is outside of tolerance'
        } else {
            err = false
            msg = ''
        }
        setState({ ...state, real: read, err, msg })
    }

    return (
        <div className='real grid grid-cols-2 gap-2'>
            <label htmlFor='real'>
				Measured (real) Value of Size Dimension
            </label>
            <input
                step='0.1'
                type='number'
                name='real'
                id='real'
                value={state.real}
                onChange={handleRealChange}
            />
        </div>
    )
}
export default Real
