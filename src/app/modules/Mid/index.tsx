import React, { FC, useContext } from 'react'
import { StateContext } from '../../Main'
import ex from '../../../assets/ex.jpeg'

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
                    title='hole-shaft'
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
            <div className='ex m-auto flex items-stretch w-full justify-between'>
                <p>Example : </p>
                <img src={ex} alt='Example' />
            </div>
            <div className='wrap grid grid-cols-2 gap-2 border border-black p-2'>
                <div className='sym grid grid-cols-2 gap-2'>
                    <label htmlFor='sym' className='border-r border-black p-2'>
						Symbol
                    </label>
                    <input
                        step='0.1'
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
                        title='max-least'
                        name='max'
                        id='max'
                        value={max ? 'true' : 'false'}
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
            </div>
            <div className='real grid grid-cols-2 gap-2'>
                <label htmlFor='real'>
					Measured (real) Value of Size Dimension
                </label>
                <input
                    step='0.1'
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
