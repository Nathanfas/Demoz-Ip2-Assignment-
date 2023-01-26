import React, { useState } from "react";
function ElectricityBill() {
    var[el,setel]=useState();
    var[Tp,setTp]=useState();
function calp(){
    if (el<50){
        Tp= parseInt(el) *0.27;
    }
   else if(el<100){
    Tp= parseInt(el) *0.78;
   }
   else if(el<200){
    Tp= parseInt(el) *1.63;
   }
   else if(el<300){
    Tp= parseInt(el) *2.0;
   }
   else if(el<400){
    Tp=parseInt(el) *2.2;
   }
   else if(el<500){
    Tp=  parseInt(el) *2.4;
   }
   else if(el>500){
    Tp= parseInt(el) *2.48;
   }
   setTp(Tp);
}
    return(
        <div>
        <h2 className="electricitybill"> Electricity Bill </h2>
        <text>  Electricity per month(KWh)</text> <br/>
        <input type="number" placeholder="0.0"  onChange={(event)=>{setel(event.target.value);}}/> <br/>
        <button type="submit"  onClick={calp}>Calculate</button> <br/>
      <text> Total Price(Birr)  </text> <br/>
        <input type="number" placeholder="0.0" value={Tp}/> <br/>
      
        </div>
        );
       
} export default ElectricityBill;
   
    
    
       