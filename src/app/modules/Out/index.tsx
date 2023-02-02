import React, { FC, useState, useEffect } from 'react'

interface IOut {
	hole: boolean
	max: boolean
	size: number
	utol: number
	ltol: number
	wtol: number
	real: number
	sym: number
}

const Out: FC<IOut> = ({ hole, max, size, utol, ltol, wtol, real, sym }) => {
    const calcMMC: () => number = () => {
        return hole ? size + ltol : size + utol
    }
    const calcLMC: () => number = () => {
        return hole ? size + utol : size + ltol
    }

    const [intervalues, setIntervalues] = useState({
        mmc: calcMMC(),
        lmc: calcLMC(),
    })

    const calcMdiff: () => number = () => {
        return Math.abs(real - intervalues.mmc)
    }

    const calcLdiff: () => number = () => {
        return Math.abs(real - intervalues.lmc)
    }

    const [diffvalues, setDiffvalues] = useState({
        mdiff: real - intervalues.mmc,
        ldiff: real - intervalues.lmc,
    })

    const calcDeviation: () => number = () => {
        let res = max
            ? Math.abs(diffvalues.mdiff + sym)
            : Math.abs(diffvalues.ldiff + sym)
        res = Math.max(res, sym)
        res = Math.min(res, sym + wtol)
        return res
    }

    const [deviation, setDeviation] = useState(calcDeviation())

    useEffect(() => {
        return () => {
            setDiffvalues({
                mdiff: calcMdiff(),
                ldiff: calcLdiff(),
            })
            setIntervalues({
                mmc: calcMMC(),
                lmc: calcLMC(),
            })
            setDeviation(calcDeviation())
        }
    }, [hole, max, size, utol, ltol, wtol, real, sym])

    return (
        <div className='out'>
            <div className='mc'>
                <div className='mmc'>
                    <div className='label'>MMC</div>
                    <div className='value'>{intervalues.mmc}</div>
                </div>
                <div className='lmc'>
                    <div className='label'>LMC</div>
                    <div className='value'>{intervalues.lmc}</div>
                </div>
            </div>
            <div className='diff'>
                <div className='mdiff'>
                    <div className='label'>difference to MMC</div>
                    <div className='value'>{diffvalues.mdiff}</div>
                </div>
                <div className='ldiff'>
                    <div className='label'>difference to LMC</div>
                    <div className='value'>{diffvalues.ldiff}</div>
                </div>
            </div>
            <div className='deviation'>
                <div className='label'>Allowed Deviation</div>
                <div className='value'>{deviation}</div>
            </div>
        </div>
    )
}

export default Out
