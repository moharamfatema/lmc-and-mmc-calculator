import { IMC, IDiff, IState, IResult } from '../../types'

export const calcMC: (state: IState) => IMC = state => {
    const { size, utol, ltol, hole } = state
    return {
        mmc: hole
            ? parseFloat(Math.abs(size + ltol).toPrecision(6))
            : parseFloat(Math.abs(size + utol).toPrecision(6)),
        lmc: hole ? Math.abs(size + utol) : Math.abs(size + ltol),
    }
}

export const calcDiff: (real: number, mc: IMC) => IDiff = (real, mc) => {
    return {
        mdiff: parseFloat(Math.abs(real - mc.mmc).toPrecision(6)),
        ldiff: parseFloat(Math.abs(real - mc.lmc).toPrecision(6)),
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
    deviation = parseFloat(deviation.toPrecision(6))
    const temp = { mc, diff, deviation }
    return temp
}
