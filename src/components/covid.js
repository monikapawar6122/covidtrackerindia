import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './covid.css';

const Covid =() => {
    const [data,setData] = useState([]);

    const getCovidData = async() =>
    {
        try{
            const res =await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch(err)
        {
            console.log(err)
        }

    }

    useEffect(() => {
       getCovidData();
    }, [])
    return (
      
           <div className="covid">
               <section>
               <h1>Live Corona Virus Tracker INDIA</h1>
               <ul>
                  
                   <li className ="card">
                       <div className ="card_main">
                           <div className ="card_inner">
                               <p className ="card_name">Total RECOVERED </p>
                               <p className ="card_total card_small"><span>{data.recovered}</span></p>
                               
                             

                           </div>
                       </div>
                   </li>
                   <li className ="card">
                       <div className ="card_main">
                           <div className ="card_inner">
                               <p className ="card_name"> Total CONFIRMED</p>
                               <p className ="card_total card_small"><span> {data.confirmed}</span></p>

                           </div>
                       </div>
                   </li>
                   <li className ="card">
                       <div className ="card_main">
                           <div className ="card_inner">
                               <p className ="card_name">Total DEATHS</p>
                               <p className ="card_total card_small"><span>{data.deaths}</span></p>

                           </div>
                       </div>
                   </li>
                   <li className ="card">
                       <div className ="card_main">
                           <div className ="card_inner">
                               <p className ="card_name"> Total ACTIVE</p>
                               <p className ="card_total card_small"><span>{data.active}</span></p>

                           </div>
                       </div>
                   </li>
                   <li className ="card">
                       <div className ="card_main">
                           <div className ="card_inner">
                               <p className ="card_name">LAST UPDATED</p>
                               <p className ="card_total card_small"><span>{data.lastupdatedtime}</span></p>

                           </div>
                       </div>
                   </li>
               </ul>
               </section> 
      </div>
    );
  }
  
  export default Covid;
  