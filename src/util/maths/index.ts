import { IMC, IDiff, IState, IResult } from '../../types'

export const calcMC: (state: IState) => IMC = state => {
    const { size, utol, ltol, hole } = state
    return {
        mmc: hole ? round(Math.abs(size + ltol)) : round(Math.abs(size + utol)),
        lmc: hole ? round(Math.abs(size + utol)) : round(Math.abs(size + ltol)),
    }
}

export const calcDiff: (real: number, mc: IMC) => IDiff = (real, mc) => {
    return {
        mdiff: round(Math.abs(real - mc.mmc)),
        ldiff: round(Math.abs(real - mc.lmc)),
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
    deviation = round(deviation)
    const temp = { mc, diff, deviation }
    return temp
}

export const round = (num: number, precision = 6) => {
    return parseFloat(num.toPrecision(precision))
}
