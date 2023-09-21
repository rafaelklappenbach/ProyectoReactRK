 import CartWidget from "../CartWidget/CartWidget"
 const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Photos</button>
                <button>Books</button>
                <button>Portrait</button>
            </div>
            <CartWidget />
        </nav> 
    )       
}

export default NavBar
