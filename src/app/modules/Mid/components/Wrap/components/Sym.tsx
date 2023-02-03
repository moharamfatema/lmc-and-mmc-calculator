import React, { FC } from 'react'
import { IState } from '../../../../../../types'
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
        <div className='sym flex gap-2 px-2'>
            <div className='p-1 align-middle text-center w-full h-auto m-auto'>
				Symbol
            </div>
            <div className='border-r-4 border-black'></div>
            <input
                step='0.1'
                type='number'
                name='sym'
                id='sym'
                className='m-2 w-full'
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
