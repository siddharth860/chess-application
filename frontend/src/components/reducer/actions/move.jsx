import actionType from "../actionType"

export const makeNewMove=({newPosition,newMove})=>{
    return {
        type :actionType.NEW_MOVE,
        payload :{newPosition,newMove}
    }
}
export const generateCandidateMoves=({candidateMoves})=>{
    return {
        type :actionType.GENERATE_CANDIDATE_MOVES,
        payload :{candidateMoves}
    }
}
export const clearCandidates=()=>{
   return {type :actionType.CLEAR_CANDIDATES} 
}

