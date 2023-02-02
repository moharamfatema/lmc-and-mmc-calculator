import React, { FC, ChangeEvent } from 'react'

interface ITolerance {
	size: number
	utol: number
	ltol: number
	wtol: number
	setSize: (size: number) => void
	setUtol: (utol: number) => void
	setLtol: (ltol: number) => void
	setWtol: (wtol: number) => void
}

const Tolerance: FC<ITolerance> = ({
    size,
    utol,
    ltol,
    wtol,
    setSize,
    setUtol,
    setLtol,
    setWtol,
}) => {
    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSize(Number(e.target.value))
    }

    const handleToleranceWidthChange = () => {
        setWtol(utol - ltol)
    }

    const handleUtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUtol(Number(e.target.value))
        handleToleranceWidthChange()
    }

    const handleLtoleranceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLtol(Number(e.target.value))
        handleToleranceWidthChange()
    }

    return (
        <div className='tolerance grid grid-cols-2 gap-2 section '>
            <label htmlFor='size'>Size Dimension</label>
            <input
                type='number'
                id='size'
                name='size'
                value={size}
                onChange={handleSizeChange}
            />
            <label htmlFor='utolerance'>Upper Tolerance</label>
            <input
                type='number'
                id='utolerance'
                name='utolerance'
                value={utol}
                onChange={handleUtoleranceChange}
            />
            <label htmlFor='ltolerance'>Lower Tolerance</label>
            <input
                type='number'
                id='ltolerance'
                name='ltolerance'
                value={ltol}
                onChange={handleLtoleranceChange}
            />
            <p className='label'>Tolerance Width</p>
            <p className='value'>{wtol}</p>
        </div>
    )
}

export default Tolerance
