export interface IResult {
	mc: IMC
	diff: IDiff
	deviation: number
}
export interface IMC {
	mmc: number
	lmc: number
}

export interface IDiff {
	mdiff: number
	ldiff: number
}

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
