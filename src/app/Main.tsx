import React, { FC, useState, createContext } from 'react'
import Tolerance from './modules/Tolerance'
import Mid from './modules/Mid'
import Out from './modules/Out'

import { IOut, IState } from './types'

const initialState: IState = {
    size: 10.0,
    utol: 0.1,
    ltol: -0.1,
    wtol: 0.2,
    sym: 0.2,
    real: 9.95,
    hole: true,
    max: true,
}

const initOut: IOut = {
    mc: {
        mmc: 0,
        lmc: 0,
    },
    diff: {
        mdiff: 0,
        ldiff: 0,
    },
    deviation: 0,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext: any = createContext({ initialState, initOut })

const Main: FC = () => {
    const [state, setState]: [IState, (state: IState) => void] =
		useState(initialState)
    const [out, setOut]: [IOut, (out: IOut) => void] = useState(initOut)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div className='main flex w-full h-[100vh] justify-center items-center p-20 my-5'>
            <div className='wrapper grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                <StateContext.Provider value={{ state, setState, out, setOut }}>
                    <Tolerance />
                    <Mid />
                    <Out />
                </StateContext.Provider>
            </div>
        </div>
    )
}

export default Main
