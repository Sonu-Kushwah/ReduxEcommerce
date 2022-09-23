export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
//delete action
export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

//Remove item qutity
export const REMOVE=(item)=>{
    return{
        type:"RMV_ONE",
        payload:item
    }
}

