import { POSTDATA, POSTDATAERROR, POSTDATALOADING } from "./type"



const initialdata={
    data:{},
    isloading:false,
    iserror:false
}
export const postreducer=(state=initialdata, {type, payload})=>{
    switch(type){
        case POSTDATALOADING:{
            return {
                ...state,
                isloading:true
            }
        }
        case POSTDATA:{
            return {
                ...state,
                isloading:false,
                iserror:false,
                dara:payload
            }
        }
        case POSTDATAERROR:{
            return {
                ...state,
                isloading:false,
                iserror:false
            }
        }
        default:{
            return state
        }
    }
}

