import React, { FC } from 'react'
import { StateContext } from '../../../../../Main'
import { IState } from '../../../../../../types'

const Datum: FC = () => {
    const {
        state,
        setState,
    }: {
		state: IState
		setState: React.Dispatch<React.SetStateAction<IState>>
	} = React.useContext(StateContext)
    return (
        <div className='max flex gap-2 justify-center align-middle content-center'>
            <select
                title='max-least'
                name='max'
                id='max'
                value={state.max ? 'true' : 'false'}
                className='my-2 border  border-black py-5 px-3 rounded-full w-fit h-auto'
                onChange={e =>
                    setState({
                        ...state,
                        max: e.target.value === 'true',
                    })
                }
            >
                <option value={'true'}>M</option>
                <option value={'false'}>L</option>
            </select>
            <div className='w-0 border-l-4 border-black'></div>
            <div className='align-middle text-center m-auto w-min'>Datum</div>
        </div>
    )
}

export default Datum
