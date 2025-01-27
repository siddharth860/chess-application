import actionType from "../actionType"

export const makeNewMove=({newPosition})=>{
    return {
        type :actionType.NEW_MOVE,
        payload :{newPosition}
    }
}
export const generateCandidateMoves=({candidateMoves})=>{
    return {
        type :actionType.GENERATE_CANDIDATE_MOVES,
        payload :{candidateMoves}
    }
}
export const clearCandidates=()=>{
    type :actionType.CLEAR_CANDIDATES 
}

