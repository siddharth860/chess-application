import actionType from "../actionType"

export const openPromotion=({rank,file,x,y})=>{
    return{
        type:actionType.PROMOTION_OPEN,
        payload:{rank,file,x,y}
    }
}
export const closePopup=()=>{
    return{
        type:actionType.PROMOTION_CLOSE,
      
    }
}