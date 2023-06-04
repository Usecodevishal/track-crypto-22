import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../components/Common/Loder';
import axios from 'axios';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import Header from '../components/Common/Header';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart/LineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';
import Footer from '../components/Common/Footer';
//import LineChart from '../components/Coin/lineChart/LineChart';

function CoinPage() {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState();
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({});

    const [priceType, setPriceType] = useState('prices');

  

  


    useEffect(()=>{
        if(id){
           getData();
            
   }
  }
  ,[id])
   
   async function getData(){
    const data = await getCoinData(id);
        
      if(data){
        coinObject(setCoinData, data);
        const prices = await getCoinPrices(id, days, priceType);
        if(prices.length > 0){
            
          settingChartData(setChartData, prices)
             setIsLoading(false);
        }
      }
   }

  
    
       const handleDaysChange = async (event) => {
        setIsLoading(true);
        setDays(event.target.value);
        const changeDaysPrices = await getCoinPrices(id, event.target.value, priceType);
        if(changeDaysPrices.length>0){
            
            settingChartData(setChartData, changeDaysPrices)
             setIsLoading(false);
        }
       }
 
         const handlePriceTypeChange = async (event) => {
          setIsLoading(true);
          setPriceType(event.target.value);
          
        const changeTypePrices = await getCoinPrices(id, days, event.target.value);
        console.log(changeTypePrices);
        if(changeTypePrices.length>0){
            
            settingChartData(setChartData, changeTypePrices)
             setIsLoading(false);
  };
}

    return (
        <div>
            <Header/>
        {
            isLoading?(
            <LoadingComponent/>
            ):(<>
                  <div className="grey-wrapper">
                    <List coin={coinData} />
                  </div>
                  
                  <div className="grey-wrapper">
                  <SelectDays handleDaysChange={handleDaysChange} days={days}/>
                  <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                    <LineChart chartData={chartData} priceType={priceType} multiAxis={false}/>
                  </div>
                  <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                  <Footer/>
                </>
            )
        }
      </div>  
    )
}

export default CoinPage;


//https://api.coingecko.com/api/v3/coins/