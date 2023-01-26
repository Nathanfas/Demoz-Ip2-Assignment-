import React,{ useState }  from "react";

function WaterBill(){
    const[w,setw]=useState();
    var[tw,settw]=useState();
function calw(){
    if (w>0 && w<=7){
       tw= parseInt(w) *1.75;
    }
   else if(w>=8 && w<=20){
    tw= parseInt(w) *3.8;
   }
   else if(w>=21 && w<=40){
    tw= parseInt(w) *4.75;
   }
   else if(w>=41 && w<=100){
    tw= parseInt(w) *14.57;
   }
   else if(w>=101 && w<=300){
    tw= parseInt(w) *19.42;
   }
   else if(w>=301 && w<=500){
    tw= parseInt(w) *24.28;
   }
   else if(w>500){
    tw= parseInt(w) *26.71;
   }
   tw=tw.toFixed(2);
   settw(tw);
} return(
    <div>
    <h2 className="waterbill"> Water Bill </h2>
    <text>  volume per month(metercube)</text> <br/>
    <input type="number" placeholder="0.0"  onChange={(event)=>{setw(event.target.value);}}/> <br/>
    <button type="submit"  onClick={calw}>Calculate</button> <br/>
  <text> Total Price(Birr)  </text> <br/>
    <input type="number" placeholder="0.0" value={tw}/> <br/>
  
    </div>
);
}export default WaterBill;