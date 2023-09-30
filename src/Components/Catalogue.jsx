import data from '../db.json'
import { Product } from './Product'

const Catalogue=()=>{
    // console.log(data);
    return (
        <div >
            <div style={{display:"grid", gridTemplateColumns:`repeat(3,1fr)`, gap:"300px"}}>
                {data.map((item)=>{
                    return <Product card={item}/>
                })}
            </div>
        </div>
    )
}
export {Catalogue}