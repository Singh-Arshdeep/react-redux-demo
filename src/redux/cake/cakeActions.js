import {BUY_CAKE} from './cakeTypes';

//action creator
export const buyCake = (numBuyCakes=1) => {
    return {
        type: BUY_CAKE,
        payload: numBuyCakes
    };
} 