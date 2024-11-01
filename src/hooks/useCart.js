import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
// const useCart = () => {
//
// }


export function useCart(){


    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState (db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 6

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {

        const itemExist = cart.findIndex(surfboard => surfboard.id === item.id )
        if(itemExist >= 0) {
            if (cart[itemExist].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)

        } else {

        item.quantity = 1
        setCart([...cart, item])
    }

    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(surfboard => surfboard.id !== id))
    }

    function increaseQuantity(id){
        const updatedCart = cart.map( item => {
            if ( item.id === id && item.quantity < MAX_ITEMS ) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
        return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const updatedCart = cart.map( item => {
            if ( item.id === id && item.quantity > 1 ) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
        return item
        })
        setCart(updatedCart)
    }


    function resetCart(e) {
        setCart([])
    }

    const isEmpty = useMemo( () => cart.length === 0, [cart] )
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )


    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        resetCart,
        isEmpty,
        cartTotal
    }

}






// export default useCart