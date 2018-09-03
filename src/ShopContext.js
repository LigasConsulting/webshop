import React from 'react'

export const ShopContext = React.createContext(
    {
        items: [],
        addItem:(item)=>{},
        removeItem:(id)=>{}
    }
);
