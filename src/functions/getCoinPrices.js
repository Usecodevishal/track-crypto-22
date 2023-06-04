import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {

    const getPrices = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
   ).then((response)=>{
    console.log("Prices>>>",response.data);
    console.log(priceType);
    console.log(response.data[priceType]);
    return response.data[priceType];
    

   }).catch((error)=>{
    console.log("error>>>", error);
    
   })
   return getPrices;
}