import { IMC, IDiff, IState, IResult } from '../../types'

export const calcMC: (state: IState) => IMC = state => {
    const { size, utol, ltol, hole } = state
    return {
        mmc: hole ? Math.abs(size + ltol) : Math.abs(size + utol),
        lmc: hole ? Math.abs(size + utol) : Math.abs(size + ltol),
    }
}

export const calcDiff: (real: number, mc: IMC) => IDiff = (real, mc) => {
    return {
        mdiff: parseFloat(Math.abs(real - mc.mmc).toPrecision(4)),
        ldiff: parseFloat(Math.abs(real - mc.lmc).toPrecision(4)),
    }
}

export const calcResult: (state: IState) => IResult = state => {
    const { max, sym, wtol } = state
    const mc = calcMC(state)
    const diff = calcDiff(state.real, mc)

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
    return temp
}
