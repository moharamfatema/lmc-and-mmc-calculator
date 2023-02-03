import React, { FC, useEffect } from 'react'
import { StateContext } from '../../Main'
import { calcResult } from '../../../util/maths'
import { IResult, IState } from '../../../types'

const Result: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {
        state,
        result,
        setResult,
    }: {
		state: IState
		result: IResult
		setResult: React.Dispatch<React.SetStateAction<IResult>>
	} = React.useContext(StateContext)

    useEffect(() => {
        setResult(calcResult(state))
        console.debug('State: ', state)
    }, [state])

    return (
        <div className='result grid grid-cols-1 gap-2 section'>
            <div className='mc grid grid-rows-2 gap-2'>
                <div className='mmc grid grid-cols-2 gap-2'>
                    <div className='label'>MMC</div>
                    <div className='value'>{result.mc.mmc}</div>
                </div>
                <div className='lmc grid grid-cols-2 gap-2'>
                    <div className='label'>LMC</div>
                    <div className='value'>{result.mc.lmc}</div>
                </div>
            </div>
            <div className='diff grid grid-rows-2 gap-2'>
                <div className='mdiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to MMC</div>
                    <div className='value'>{result.diff.mdiff}</div>
                </div>
                <div className='ldiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to LMC</div>
                    <div className='value'>{result.diff.ldiff}</div>
                </div>
            </div>
            <div className='deviation grid grid-cols-2 gap-2'>
                <div className='label'>Allowed Deviation</div>
                <div className='value final'>{result.deviation}</div>
            </div>
        </div>
    )
}

export default Result
