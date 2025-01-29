import actionType from "./actionType"
import {Status} from '../../constant.jsx'
export const reducerApp=(state,action)=>{
    switch(action.type){
        case actionType.NEW_MOVE:{
            let {turn,position}=state
            turn= turn==='w'?'b':'w'
            position=[
                ...position,action.payload.newPosition
            ]
            return{
                ...state,turn,position
            }
        }
        case actionType.GENERATE_CANDIDATE_MOVES:{
            return{
            ...state,candidateMoves: action.payload.candidateMoves
        } }
        case actionType.CLEAR_CANDIDATES:{
            return{
            ...state,candidateMoves:[]
        } }
        case actionType.PROMOTION_OPEN:{
            return{
            ...state,status:Status.promoting,promotionSquare:{...action.payload}
        } }
        case actionType.PROMOTION_CLOSE:{
            return{
            ...state,status:Status.ongoing,promotionSquare:null
        } }
        default:
            return state
    }

}