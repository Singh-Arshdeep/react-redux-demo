import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux';

const CustomCakeContainer = () => {
    
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    
    const [numBuyCakes, setNumBuyCakes] = useState(1);
    return (  
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <input value={numBuyCakes} onChange={(event)=>{setNumBuyCakes(event.target.value)}}/>
            <button onClick={()=>dispatch(buyCake(numBuyCakes))}>Buy Cake</button>
        </div>
    );
}
 
export default CustomCakeContainer;