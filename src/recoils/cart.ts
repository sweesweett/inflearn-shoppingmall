import {atom,selector, selectorFamily, useRecoilValue} from 'recoil';
 const cartState=atom<Map<string,number>>({
    key:'cartState',
    default: new Map()
});
 export const cartItemSelector = selectorFamily<number|undefined,string>({
     key:'cartItem',
     get:(id:string)=>({get})=>{
          const carts = get(cartState)
            return carts.get(id)
         
     },
     set:(id:string)=>({set,get},newValue)=>{

         const newCart = new Map([...get(cartState)])
        console.log(newCart.get(id))
         return set(cartState,newCart)
         
     }
});