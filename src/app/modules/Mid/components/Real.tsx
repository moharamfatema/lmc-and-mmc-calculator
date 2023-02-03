import React, { FC } from 'react'
import { StateContext } from '../../../Main'
import { IState } from '../../../types'

const Real: FC = () => {
    const {
        state,
        setState,
    }: {
		state: IState
		setState: React.Dispatch<React.SetStateAction<IState>>
	} = React.useContext(StateContext)
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
                onChange={e =>
                    setState({ ...state, real: parseFloat(e.target.value) })
                }
            />
        </div>
    )
}
export default Real
