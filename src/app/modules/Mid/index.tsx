import React, { FC } from 'react'
interface IMid {
	sym: number
	real: number
	hole: boolean
	max: boolean
	setSym: (sym: number) => void
	setReal: (real: number) => void
	setHole: (hole: boolean) => void
	setMax: (max: boolean) => void
}
const Mid: FC<IMid> = ({
    sym,
    real,
    hole,
    max,
    setSym,
    setReal,
    setHole,
    setMax,
}) => {
    return (
        <div className='mid'>
            <div className='hole'>
                <label htmlFor='hole'>
					Select Hole or shaft (outer or inner feature)
                </label>
                <select
                    name='hole'
                    id='hole'
                    value={hole ? 'true' : 'false'}
                    onChange={e => setHole(e.target.value === 'true')}
                >
                    <option value={'true'}>Hole</option>
                    <option value={'false'}>Shaft</option>
                </select>
            </div>
            <div className='sym'>
                <label htmlFor='sym'>Symbol</label>
                <input
                    type='number'
                    name='sym'
                    id='sym'
                    value={sym}
                    onChange={e =>
                        setSym(Math.max(0, parseFloat(e.target.value)))
                    }
                />
            </div>
            <div className='max'>
                <select
                    name='max'
                    id='max'
                    value={max ? 'true' : 'false'}
                    onChange={e => setMax(e.target.value === 'true')}
                >
                    <option value={'true'}>M</option>
                    <option value={'false'}>L</option>
                </select>
                <label htmlFor='sym'>Datum</label>
            </div>
            <div className='real'>
                <label htmlFor='real'>
					Measured (real) Value of Size Dimension
                </label>
                <input
                    type='number'
                    name='real'
                    id='real'
                    value={real}
                    onChange={e => setReal(parseFloat(e.target.value))}
                />
            </div>
        </div>
    )
}

export default Mid
