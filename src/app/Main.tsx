import React, { FC, useState, createContext } from 'react'
import Tolerance from './modules/Tolerance'
import Mid from './modules/Mid'
import Result from './modules/Result'

import { IResult, IState } from '../types'

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

const initResult: IResult = {
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
export const StateContext: any = createContext({ initialState, initResult })

const Main: FC = () => {
    const [state, setState]: [IState, (state: IState) => void] =
		useState(initialState)
    const [result, setResult]: [IResult, (Result: IResult) => void] =
		useState(initResult)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div className='main flex w-full justify-center items-center lg:p-20 my-10 xl:my-auto'>
            <div className='wrapper grid grid-cols-1 xl:grid-cols-3 gap-8 my-10'>
                <StateContext.Provider
                    value={{ state, setState, result, setResult }}
                >
                    <Tolerance />
                    <Mid />
                    <Result />
                </StateContext.Provider>
            </div>
        </div>
    )
}

export default Main
