
import Header from "./components/Header"
import Surfboard from "./components/Surfboard"
import { useCart } from "./hooks/useCart"

function App() {

    const {data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart, isEmpty, cartTotal } = useCart()



  return (
    <>

    <Header
    cart={cart}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    resetCart={resetCart}
    isEmpty={isEmpty}
    cartTotal = {cartTotal}

    />

    

<main className="container-xl mt-5">
    <h2 className="text-center">Colección de Tablas de Surf</h2>
    <div className="row mt-5">


     {data.map((surfboard)=> (
        <Surfboard
        key={surfboard.id}
        surfboard={surfboard}
        addToCart={addToCart}
        />
     ))}  


       
        


    </div>
</main>

<footer className="bg-dark mt-5 py-5">
    <div className="container-xl">
        <p className="text-white text-center fs-4 mt-4 m-md-0">Proyecto Web SurfShop - HTML5, CSS3, Bootstrap, Javascript y React</p>
        <p className="text-white text-center fs-2 mt-4 m-md-0">Este proyecto consiste en la creación de una vista de productos con interacción con el carrito a traves del uso de useState, useEffect, useMemo y customHooks en React. Además se ha usado algunas clases de utilidad de Bootstrap para dar estilo CSS. Adicionalmente se usa el LocalStorage para mantener los artículos en el carrito tras refrescar la página.</p>
        <p className="text-white text-center fs-4 mt-4 m-md-0">Creado por FranRubioDev</p>

    </div>
</footer>
    </>
  )
}

export default App
