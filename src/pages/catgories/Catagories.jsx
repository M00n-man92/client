import './catagories.scss'
import { catagory } from '../../data'
import Catitem from './catagoryitem/Catitem'
export default function Catagories() {
    return (

        <div className="catagory">
            
            <div className="blamegame">
               {/* <span>Catagories</span> */}
                
            </div>
            <div className="lovetoplay">
            {catagory.map((item,i)=>(
                <Catitem item={item} id={i} key={i}/>
            ))}
            </div>
            
        </div>
    )
}
