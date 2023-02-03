import React, { FC } from 'react'
import { StateContext } from '../../../Main'
import { IState } from '../../../../types'

const Hole: FC = () => {
    const {
        state,
        setState,
    }: {
		state: IState
		setState: React.Dispatch<React.SetStateAction<IState>>
	} = React.useContext(StateContext)
    return (
        <div className='hole grid grid-cols-2 gap-2'>
            <label htmlFor='hole'>
				Select Hole or shaft (outer or inner feature)
            </label>
            <select
                title='hole-shaft'
                name='hole'
                id='hole'
                value={state.hole ? 'true' : 'false'}
                onChange={e =>
                    setState({ ...state, hole: e.target.value === 'true' })
                }
            >
                <option value={'true'}>Hole</option>
                <option value={'false'}>Shaft</option>
            </select>
        </div>
    )
}

export default Hole
