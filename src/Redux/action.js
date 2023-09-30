const addtocart=(item)=>{
    return {
        type:'ADD_TO_CART',
        payload:item,
    }
}

const removefromcart=(item)=>{
    return {
        type:'REMOVE_ITEM',
        payload:item,
    }
}
export {addtocart,removefromcart};