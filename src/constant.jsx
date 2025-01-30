import { createPosition } from "./components/bits/helper";

export const Status={
    'ongoing':'Ongoing',
    'promoting':'Promoting',
    'white':'White wins',
    'black':'Black wins'
}

export const initData={
    position :[createPosition()],
    turn :'w',
    candidateMoves:[],
    movesList:[],
    status:Status.ongoing,
    promotionSquare: null,
    castleDirection:{
        w:'both',
        b:'both'
    }
}