import { Link } from "react-router-dom"
const Navbar=()=>{
    return (
        <div style={{display:"flex", justifyContent:"space-around", boxShadow:"0 0 10px black", padding:"30px"}}>
            <Link to="/">Logs</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}
export {Navbar}