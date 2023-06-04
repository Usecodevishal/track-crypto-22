import axios from "axios"

export const getCoinData=(id)=>{
   const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=>{
     console.log("response is >>> ",response);
     return response.data;
    })
    .catch((err)=>{
        console.log("error>>>>>",err)
       });
       return myData;
}