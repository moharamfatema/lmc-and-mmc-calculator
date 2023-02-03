import React, { FC } from 'react'
import { IState } from '../../../../../types'
import { StateContext } from '../../../../../Main'

const Sym: FC = () => {
    const {
        state,
        setState,
    }: {
		state: IState
		setState: React.Dispatch<React.SetStateAction<IState>>
	} = React.useContext(StateContext)
    return (
        <div className='sym grid grid-cols-2 gap-2'>
            <label htmlFor='sym' className='border-r border-black p-2'>
				Symbol
            </label>
            <input
                step='0.1'
                type='number'
                name='sym'
                id='sym'
                value={state.sym}
                onChange={e =>
                    setState({
                        ...state,
                        sym: Math.max(0, parseFloat(e.target.value)),
                    })
                }
            />
        </div>
    )
}

export default Sym
