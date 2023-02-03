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
        <div className='max grid grid-cols-2 gap-2'>
            <select
                title='max-least'
                name='max'
                id='max'
                value={state.max ? 'true' : 'false'}
                className='border-l border-black p-2 rounded-full w-min h-auto m-auto'
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
            <label
                htmlFor='sym'
                className='text-right border-l border-black p-2'
            >
				Datum
            </label>
        </div>
    )
}

export default Datum
