import React, { FC, useState, createContext } from 'react'
import Tolerance from './modules/Tolerance'
import Mid from './modules/Mid'
import Out from './modules/Out'

export interface IState {
	size: number
	utol: number
	ltol: number
	sym: number
	real: number
	hole: boolean
	max: boolean
	wtol: number
}

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext: any = createContext(initialState)

const Main: FC = () => {
    const [state, setState]: [IState, (state: IState) => void] =
		useState(initialState)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div className='main flex w-full h-[100vh] justify-center items-center p-20 my-5'>
            <div className='wrapper grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                <StateContext.Provider value={{ state, setState }}>
                    <Tolerance />
                    <Mid />
                    <Out />
                </StateContext.Provider>
            </div>
        </div>
    )
}

export default Main
