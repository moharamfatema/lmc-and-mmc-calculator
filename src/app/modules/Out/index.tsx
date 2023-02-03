import React, { FC, useEffect } from 'react'
import { StateContext } from '../../Main'
import { IMC, IDiff, IOut } from '../../types'

const Out: FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { state, out, setOut }: any = React.useContext(StateContext)

    const { size, utol, ltol, hole, real } = state

    const calcMC: (size: number, ltol: number, utol: number) => IMC = (
        size,
        ltol,
        utol,
    ) => {
        return {
            mmc: hole ? Math.abs(size + ltol) : Math.abs(size + utol),
            lmc: hole ? Math.abs(size + utol) : Math.abs(size + ltol),
        }
    }

    const calcdiff: (real: number, mc: IMC) => IDiff = (real, mc) => {
        return {
            mdiff: parseFloat(Math.abs(real - mc.mmc).toPrecision(4)),
            ldiff: parseFloat(Math.abs(real - mc.lmc).toPrecision(4)),
        }
    }

    const calcOut: () => IOut = () => {
        const { max, sym, wtol } = state
        const mc = calcMC(size, ltol, utol)
        const diff = calcdiff(real, mc)

        let deviation = max
            ? Math.abs(diff.mdiff + sym)
            : Math.abs(diff.ldiff + sym)
        if (deviation < sym) {
            deviation = sym
        } else if (deviation > sym + wtol) {
            deviation = sym + wtol
        }
        deviation = parseFloat(deviation.toPrecision(4))
        const temp = { mc, diff, deviation }
        console.debug('Out: ', temp)
        return temp
    }

    useEffect(() => {
        return () => {
            console.debug('State: ', state)
            setOut(calcOut())
        }
    }, [state])

    return (
        <div className='out grid grid-cols-1 gap-2 section'>
            <div className='mc grid grid-rows-2 gap-2'>
                <div className='mmc grid grid-cols-2 gap-2'>
                    <div className='label'>MMC</div>
                    <div className='value'>{out.mc.mmc}</div>
                </div>
                <div className='lmc grid grid-cols-2 gap-2'>
                    <div className='label'>LMC</div>
                    <div className='value'>{out.mc.lmc}</div>
                </div>
            </div>
            <div className='diff grid grid-rows-2 gap-2'>
                <div className='mdiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to MMC</div>
                    <div className='value'>{out.diff.mdiff}</div>
                </div>
                <div className='ldiff grid grid-cols-2 gap-2'>
                    <div className='label'>difference to LMC</div>
                    <div className='value'>{out.diff.ldiff}</div>
                </div>
            </div>
            <div className='deviation grid grid-cols-2 gap-2'>
                <div className='label'>Allowed Deviation</div>
                <div className='value final'>{out.deviation}</div>
            </div>
        </div>
    )
}

export default Out
