import React, { useState } from "react";

function Bonuspay () {
    var[gs,setgs]=useState();
    var[bp,setbp]=useState();
    var[btax,setbtax]=useState();
    var[netb,setnetb]=useState();
    function calu(){
 if(gs>=10900){
    btax=parseInt(bp) *35/100;
    netb= parseInt(bp) - parseInt(btax);
 } 
 else if(gs>=7801 && gs< 10900){
    btax=parseInt(bp) *30/100;
    netb= parseInt(bp) - parseInt(btax);
 }
 else if(gs>=5251 && gs <=7800){
    btax=parseInt(bp) *25/100;
    netb= parseInt(bp) - parseInt(btax);
 }
 else if(gs >=3201 && gs <=5250){
    btax=parseInt(bp) *20/100;
    netb= parseInt(bp) - parseInt(btax);
 }
 else if(gs>=1651 && gs <=3200){
    btax=parseInt(bp) *15/100;
    netb= parseInt(bp) - parseInt(btax);
 }
 else if(gs>=601  && gs <=1650){
    btax=parseInt(bp) *10/100;
    netb= parseInt(bp) - parseInt(btax);
 }
 else if(gs<600){
    btax=null;
    netb= parseInt(bp) ;
 }
 setbtax(btax);
 setnetb(netb);
 
    }

    return (
    <div>
    <h2 className="bonuspay">Calculate Your Bonus pay </h2>
    <text> Gross Salary (same the whole year):  </text> <br/>   
    <input type="number" placeholder="0.0"  onChange={(event)=>{setgs(event.target.value);}} /> <br/>
    <text> Bonus pay :  </text> <br/>   
    <input type="number" placeholder="0.0"  onChange={(event)=>{setbp(event.target.value);}} /> <br/>
    <button type="submit" onClick={calu}>Calculate</button><br/><br/>
    <text> Net Bonus payble :  </text> <br/>   
    <input type="text" placeholder="0.0" value={netb} /> <br/>
    <text> Bonus Tax :  </text> <br/>   
    <input type="text" placeholder="0.0"  value={btax}/> <br/>

    </div>
    );
    } //>7000 30% 
    //7000-6000 25%
//5000-4000 20%
//3000-2000 15%
//1000-600 10%
//<600 0

    export default Bonuspay;