import React, { FC, useState, useEffect } from 'react'
import { StateContext } from '../../Main'

const Out: FC<{
	wtol: number
}> = ({ wtol }) => {
    const { state }: any = React.useContext(StateContext)
    const { size, utol, ltol, hole, max, real, sym } = state
    const calcMMC: () => number = () => {
        return hole ? Math.abs(size + ltol) : Math.abs(size + utol)
    }
    const calcLMC: () => number = () => {
        return hole ? Math.abs(size + utol) : Math.abs(size + ltol)
    }

    const [intervalues, setIntervalues] = useState({
        mmc: calcMMC(),
        lmc: calcLMC(),
    })

    const calcMdiff: () => number = () => {
        return parseFloat(Math.abs(real - intervalues.mmc).toPrecision(4))
    }

    const calcLdiff: () => number = () => {
        return parseFloat(Math.abs(real - intervalues.lmc).toPrecision(4))
    }

    const [diffvalues, setDiffvalues] = useState({
        mdiff: real - intervalues.mmc,
        ldiff: real - intervalues.lmc,
    })

    const calcDeviation: () => number = () => {
        let res = max
            ? Math.abs(diffvalues.mdiff + sym)
            : Math.abs(diffvalues.ldiff + sym)
        if (res < sym) {
            res = sym
        } else if (res > sym + wtol) {
            res = sym + wtol
        }
        return parseFloat(res.toPrecision(4))
    }

    const [deviation, setDeviation] = useState(calcDeviation())

    useEffect(() => {
        return () => {
            console.debug('diffvalues', intervalues, real, calcLdiff())
            setDiffvalues({
                mdiff: calcMdiff(),
                ldiff: calcLdiff(),
            })
        }
    }, [intervalues, real, wtol, state])

    useEffect(() => {
        return () => {
            console.debug('intervalues', state)
            setIntervalues({
                mmc: calcMMC(),
                lmc: calcLMC(),
            })
        }
    }, [state, wtol])

    useEffect(() => {
        return () => {
            console.debug('dev', diffvalues, wtol, state)
            setDeviation(calcDeviation())
        }
    }, [diffvalues, wtol, state])

    return (
        <div className='out grid grid-cols-1 gap-2 section'>
            <div className='mc grid grid-rows-2 gap-2'>
                <div className='mmc grid grid-cols-2 gap-2'>
                    <div className='label'>MMC</div>
                    <div className='value'>{intervalues.mmc}</div>
                </div>
                <div className='lmc grid grid-cols-2 gap-2'>
                    <div className='label'>LMC</div>
                    <div className='value'>{intervalues.lmc}</div>
                </div>
            </div>
            <div className='diff grid grid-rows-2 gap-2'>
                <div className='mdiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to MMC</div>
                    <div className='value'>{diffvalues.mdiff}</div>
                </div>
                <div className='ldiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to LMC</div>
                    <div className='value'>{diffvalues.ldiff}</div>
                </div>
            </div>
            <div className='deviation grid grid-cols-2 gap-2'>
                <div className='label'>Allowed Deviation</div>
                <div className='value final'>{deviation}</div>
            </div>
        </div>
    )
}

export default Out
