import React, { useState } from "react";

function Netsalary  () {
  var [Bsal, setBsal]= useState();
  var[allw,setallw]=useState();
  var[gross,setgross]=useState();
  var[pen,setpen]= useState();
  var[tax,settax]=useState();
  var[td, settd]=useState();
  var[nets,setnets]=useState();
   function calculation(){
 
   gross= parseInt(Bsal) + parseInt(allw);
 setgross(gross);

   pen= parseInt(Bsal) * 7/100;
   setpen(pen);

   if (Bsal >=10900){
    tax=parseInt(Bsal) * 35/100;
   }
   else if(Bsal >=7801 && Bsal < 10900){
    tax=parseInt(Bsal) * 30/100;
   }
   else if(Bsal >=5251 && Bsal <=7800){
    tax=parseInt(Bsal) * 25/100;
   }
   else if(Bsal >=3201 && Bsal <=5250){
    tax=parseInt(Bsal) * 20/100;
   }
   else if(Bsal >=1651 && Bsal <=3200 ){
    tax=parseInt(Bsal) * 15/100;

   }
    else if(Bsal >=601  && Bsal <=1650 ){
    tax=parseInt(Bsal) * 10/100;
    
   }
   else{
    tax= null;
   } 
   settax(tax);

  td= parseInt(pen) + parseInt(tax);
  settd(td);

  nets= parseInt(gross) - parseInt(td);
  setnets(nets);

   }

    return (
    <div>
    <h2 className="netsalary">Calculate Your Net salary</h2>
   <text> Basic Salary :  </text> <br/>   
    <input type="number" placeholder="0.0"  onChange={(event)=>{setBsal(event.target.value);}}/> <br/>
  <text>Allowance :  </text>   <br/> 
    <input type="number" placeholder="0.0" onChange={(event)=>{setallw(event.target.value);}} /> <br/>
     <button type="submit" onClick={calculation} > Calculate </button> <br/> <br/>

     <text> Gross Salary :  </text> <br/>   
    <input type="text" placeholder="0.0" value={gross} /> <br/>
  <text> Pension (7%):  </text>   <br/> 
    <input type="text" placeholder="0.0" value={pen} /> <br/>
    <text> Income Tax:  </text> <br/>   
    <input type="text" placeholder="0.0" value={tax} /> <br/>
  <text>Total Deduction :  </text>   <br/> 
    <input type="text" placeholder="0.0" value={td} /> <br/>
    <text> Net Salary :  </text> <br/>   
    <input type="text" placeholder="0.0" value={nets} /> <br/>
    
    </div>
    );
    }
    export default Netsalary;