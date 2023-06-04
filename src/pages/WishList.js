import React, { useEffect, useState } from 'react'
import { get100Coins } from '../functions/get100Coins';
import LoadingComponent from '../components/Common/Loder';
import Header from '../components/Common/Header';
import TabsComponents from '../components/Dashboard/Tabs';

function WishListPage() {
    const wishCoinsStored = JSON.parse(localStorage.getItem("wishCoinsList"));
    const [myWishList, setMyWishList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        setLoading(true);
        const allCoins = await get100Coins();
        if(wishCoinsStored){
            setMyWishList( allCoins.filter((item)=>wishCoinsStored.includes(item.id)));
        }
        
        setLoading(false);
    }

    return (
        <div>
            <Header/>
            {loading || false ? (  // if loading == true and their is no coin in localStorage then loading

                <LoadingComponent/>
            ):(
               <div style={{minHeight: "90vh"}}>
                {myWishList?.length === 0 || !wishCoinsStored ?  (
                    <h1 style={{textAlign: "center" ,marginTop:"3rem"}}>No Coin In The WishList</h1>
                ):(
                    <div style={{height: "95vh"}}><TabsComponents coins ={myWishList} isWishlistPage={true}/></div>
                )}
               </div>
            )}
        </div>
    )
}

export default WishListPage;
