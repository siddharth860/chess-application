import actionType from "../actionType"

export const makeNewMove=({newPosition})=>{
    return {
        type :actionType.NEW_MOVE,
        payload :{newPosition}
    }
}

