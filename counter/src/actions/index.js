export const inc = 'account/increment'
export const dec = 'account/decrement'
export const incByAmt = 'account/incrementByAmount'

export function increment() {   
    return {type:inc};
}
export function decrement() {
    return {type:dec};
}   
export function incrementByAmount(value) {
    return {type:incByAmt,payload:value};
}