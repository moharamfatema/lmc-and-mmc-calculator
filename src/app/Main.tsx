import React, { FC, useState } from 'react'
import Tolerance from './modules/Tolerance'
import Mid from './modules/Mid'
import Out from './modules/Out'

interface IInValues {
	size: number
	utol: number
	ltol: number
	wtol: number
	sym: number
	real: number
}

const Main: FC = () => {
    const [invalues, setInvalues]: [
		IInValues,
		React.Dispatch<React.SetStateAction<IInValues>>,
	] = useState({
	    size: 10.0,
	    utol: 0.1,
	    ltol: -0.1,
	    wtol: 0.2,
	    sym: 0.2,
	    real: 9.95,
	})

    const [menuvalues, setMenuvalues] = useState({
        hole: true,
        max: true,
    })

    return (
        <div className='main flex w-full h-[100vh] justify-center items-center'>
            <Tolerance
                size={invalues.size}
                utol={invalues.utol}
                ltol={invalues.ltol}
                wtol={invalues.wtol}
                setSize={(size: number) => {
                    setInvalues({ ...invalues, size })
                }}
                setUtol={(utol: number) => {
                    setInvalues({ ...invalues, utol })
                }}
                setLtol={(ltol: number) => {
                    setInvalues({ ...invalues, ltol })
                }}
                setWtol={(wtol: number) => {
                    setInvalues({ ...invalues, wtol })
                }}
            />
            <Mid
                sym={invalues.sym}
                real={invalues.real}
                hole={menuvalues.hole}
                max={menuvalues.max}
                setSym={(sym: number) => {
                    setInvalues({ ...invalues, sym })
                }}
                setReal={(real: number) => {
                    setInvalues({ ...invalues, real })
                }}
                setHole={(hole: boolean) => {
                    setMenuvalues({ ...menuvalues, hole })
                }}
                setMax={(max: boolean) => {
                    setMenuvalues({ ...menuvalues, max })
                }}
            />
            <Out
                hole={menuvalues.hole}
                max={menuvalues.max}
                size={invalues.size}
                utol={invalues.utol}
                ltol={invalues.ltol}
                wtol={invalues.wtol}
                real={invalues.real}
                sym={invalues.sym}
            />
        </div>
    )
}

export default Main
