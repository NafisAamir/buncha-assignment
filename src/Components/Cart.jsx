import { useSelector } from "react-redux";
const Cart = () => {
    const cart = useSelector((state) => state.cart);

    console.log(cart);
    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(3,1fr)`, gap: "50px" }}>
            {cart.cartItems.map((item) => {
                return <div style={{ boxShadow: "0 0 10px black" }}>
                    <img width="200px" style={{ aspectRatio: "1/1" }} src={item.image} />
                    <h2>{item.name}</h2>
                    <p>{item.weight}</p>
                    <h2>₹{item.price}</h2>
                </div>
            })}
        </div>
    )
}
export { Cart }