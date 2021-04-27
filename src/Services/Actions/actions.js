import ADD_TO_CART from '../constants';
import { REMOVE_TO_CART,SUM} from '../constants';
export const addToCart =(data)=>{
   
    return{
        type:'ADD_TO_CART',
        data: data
    }
}
export const RemoveToCart = ()=>{
    console.warn("actions",)
    return {
        type:'REMOVE_TO_CART',
        
    }
}
export const adddPrice = (data)=>{
    return{
        type:'SUM',
        data:data
    }
}
