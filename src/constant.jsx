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
    status:Status.ongoing,
    promotionSquare: null
}