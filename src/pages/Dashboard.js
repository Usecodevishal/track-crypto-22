import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import TabsComponents from '../components/Dashboard/Tabs';

import Search from '../components/Dashboard/Search';
import LoadingComponent from '../components/Common/Loder';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Button from '../components/Common/Button';
import PaginationComponent from '../components/Dashboard/Pgination';
import Footer from '../components/Common/Footer';
function DashboardPage() {

const [coins, setCoins] = useState([]);
const [search, setSearch] = useState("");
const [isLoading, setIsLoading] = useState(true);
const [pageNumber, setPageNumber] = useState(1);
const [paginatedCoins, setPaginatedCoins] = useState([]);
const [notFetch7sec, setNotFetch7sec] = useState(false);
const [str, setStr] = useState("The Coingeko Api is facing huge Traffic now! Please Visit in Later Time!!!");
const [string, setString] = useState("")
let full = false;
let index = 1;
    

const handlePageChange = (event, value) => {
  setPageNumber(value);
  var startingIndex = (value - 1) * 10;
  setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
};

const onSearchChange=(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
}


const filterCoins = coins.filter(
    (item)=>
    item.name.toLowerCase().includes(search.toLowerCase()) || 
item.symbol.toLowerCase().includes(search.toLowerCase() ) 
)


useEffect(()=>{
   getData();
},[]);

   const getData = async () =>{
    const myCoins = await get100Coins();

    if(myCoins){
        
        setCoins(myCoins);
       
        setPaginatedCoins(myCoins.slice(0, 10));
        setIsLoading(false);
       
    }else {
     
      
      // if(notFetch7sec === false && isLoading === true){
        
      //   setTimeout(() => {
      //     setIsLoading(false);
      //     setNotFetch7sec(true);
      //     //let str = "The Coingeko Api is facing huge Traffic now! Please Visit in Later Time!!!";
         
          
      //     typingNotify();
        
      //   },7000);
      // }

      
      setTimeout(() => {
      if(isLoading === true){
        setNotFetch7sec(true);
        typingNotify();
      }else {
        return;
      }
    },10000);
     
    }

    
   }

 
    

   function typingNotify() {
    
    
     // let new_title = str.slice(0,index);
     
        //heading.innerText = new_title;
      
        setString(str.slice(0,index));
      

      if(full === false ){
        index++;
        if(index > str.length){
          full = true;
        }

      }
      if(full === true){
        index--;
        if(index < 1){
          full = false;
        }
      }


      setTimeout(() => typingNotify(), 100);
    }
  
    return (
        <>
        <div>
            <Header/>
            <BackToTop/>
            <Search search={search} onSearchChange={onSearchChange}/>
        </div>
        {search && filterCoins.length === 0 ?(
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "80vh",
            }}
          >
            <h1 style={{ textAlign: "center" }}>No Results Found</h1>
            <p style={{ textAlign: "center", color: "var(--grey)" }}>
              Could not find what you were looking for...
            </p>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="/dashboard">
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </a>
            </div>
          </div>
        ):(
            !isLoading && !notFetch7sec ?(
                <div>
        <TabsComponents coins={search ?filterCoins: paginatedCoins}/>
        {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
          <Footer/>
        </div>): !notFetch7sec? (
            <LoadingComponent/>
        ): (<h1 className='apiTraffic' style={{color: "white"}}>{string}</h1>)
        
        )}
            
        </>
       

    )
}

export default DashboardPage;
