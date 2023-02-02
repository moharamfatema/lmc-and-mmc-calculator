import React, { FC, useContext } from 'react'
import { StateContext } from '../../Main'

const Mid: FC = () => {
    const { state, setState }: any = useContext(StateContext)
    const { hole, sym, max, real } = state
    return (
        <div className='mid grid gap-2 border section'>
            <div className='hole grid grid-cols-2 gap-2'>
                <label htmlFor='hole'>
					Select Hole or shaft (outer or inner feature)
                </label>
                <select
                    name='hole'
                    id='hole'
                    value={hole ? 'true' : 'false'}
                    onChange={e =>
                        setState({ ...state, hole: e.target.value === 'true' })
                    }
                >
                    <option value={'true'}>Hole</option>
                    <option value={'false'}>Shaft</option>
                </select>
            </div>
            <div className='wrap grid grid-cols-2 gap-2'>
                <div className='sym grid grid-cols-2 gap-2'>
                    <label htmlFor='sym'>Symbol</label>
                    <input
                        type='number'
                        name='sym'
                        id='sym'
                        value={sym}
                        onChange={e =>
                            setState({
                                ...state,
                                sym: Math.max(0, parseFloat(e.target.value)),
                            })
                        }
                    />
                </div>
                <div className='max grid grid-cols-2 gap-2'>
                    <select
                        name='max'
                        id='max'
                        value={max ? 'true' : 'false'}
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
                    <label htmlFor='sym' className='text-right'>
						Datum
                    </label>
                </div>
            </div>
            <div className='real grid grid-cols-2 gap-2'>
                <label htmlFor='real'>
					Measured (real) Value of Size Dimension
                </label>
                <input
                    type='number'
                    name='real'
                    id='real'
                    value={real}
                    onChange={e =>
                        setState({ ...state, real: parseFloat(e.target.value) })
                    }
                />
            </div>
        </div>
    )
}

export default Mid
