import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyIceCream } from '../redux';

const IceCreamContainer = () => {
    const numOfIceCream=useSelector(state=>state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (  
        <div>
            <h2>Number of Icecreams - {numOfIceCream}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Icecreams</button>
        </div>
    );
}
 
export default IceCreamContainer;