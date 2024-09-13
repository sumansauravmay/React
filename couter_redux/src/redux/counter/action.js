import { DEC, INC, RESET } from "./type"

export const incdata=(payload)=>{
return {type: INC, payload}
}

export const decdata=(payload)=>{
    return {type: DEC, payload}
}

export const resetdata=(payload)=>{
    return {type: RESET, payload}
}

