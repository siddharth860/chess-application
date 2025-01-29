import { useContextApp } from '../context/context.jsx'
import './popup.css'
import PromotionBox from './promotionbox/promotionbox.jsx'
import {Status } from '../../constant.jsx'
import { closePopup } from '../reducer/actions/popup.js'


const Popup=()=>{  
    
    const{appState,dispatch}=useContextApp()
    if(appState.status===Status.ongoing)
       return null
    const onClosePopup=()=>{
        dispatch(closePopup())
    }
   return(
    <div className='popup'>
        <PromotionBox onClosePopup={onClosePopup}/>
    </div>
   )
}

export default Popup