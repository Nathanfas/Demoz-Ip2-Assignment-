import React, { useState } from "react";
function Overtime(){
var[bs,setbs]=useState();
var[s,sets]=useState();
var[t,sett]=useState();
var[res,setres]=useState();
var[ph,setph]=useState();
var[goe,setgoe]=useState();
var rate;
function cover(){
if(s){
    rate=0.007812;
goe=parseInt(bs) * parseInt(s) * rate;
}
else if (t){
    rate=0.009114;
    goe=parseInt(bs) * parseInt(t) * rate;
}
else if (res){
    rate=0.010416;
    goe=parseInt(bs) * parseInt(res) * rate;
}
else if (ph){
    rate=0.01302;
    goe=parseInt(bs) * parseInt(ph) * rate;
}
goe=goe.toFixed(2);
setgoe(goe);
}
return(
 <div>
        <h2 className="overtime"> Over Time Salary </h2>
        <text> Basic Salary</text> <br/>
        <input type="number" placeholder="0.0"  onChange={(event)=>{setbs(event.target.value);}}/> <br/><br/>

        <text> overtime sapan (6AM to 10PM)</text>  
        <input type="number" onChange={(event)=>{sets(event.target.value);}}></input><br/>
        <text> overtime sapan (10PM to 6AM)</text>  <input type="number" onChange={(event)=>{sett(event.target.value);}}></input><br/>
        <text> overtime sapan (On Rest day)     </text>  <input type="number"onChange={(event)=>{setres(event.target.value);}}></input><br/>
        <text> overtime sapan (Public hHoliday)</text>  <input type="number"onChange={(event)=>{setph(event.target.value);}}></input><br/>

        <button type="submit" onClick={cover}>Calculate</button> <br/><br/>
      <text> Gross overtime earning  </text> <br/>
        <input type="text" placeholder="0.0" value={goe}/> <br/>
      
        </div>


);



} export default Overtime;