import React,{ useState }  from "react";
function WifiBill(){
    var[mb,setmb]=useState();
    var[Tp,setTp]=useState();
function calp(){
    if (mb==2){
        Tp= 499;
    }
   else if(mb==3){
    Tp= 699;
   }
   else if(mb==4){
    Tp= 899;
   }
   else if(mb==5){
    Tp= 1099;
   }
   else if(mb==6){
    Tp=1249;
   }
   else if(mb==8){
    Tp=  1499;
   }
   else if(mb==10){
    Tp= 1900;
   }
   else if(mb==15){
    Tp= 2300;
   }
   else if(mb==20){
    Tp= 3320;
   }
   setTp(Tp);
}
    return(
        <div>
        <h2 className="wifibill"> WIFI Bill </h2>
        <text>  Access speed per month(Mbps)</text> <br/>
        <input type="number" placeholder="0.0"  onChange={(event)=>{setmb(event.target.value);}}/> <br/>
        <button type="submit" onClick={calp}>Calculate</button> <br/>
      <text> Total Price(Birr)  </text> <br/>
        <input type="number" placeholder="0.0" value={Tp}/> <br/>
      
        </div>
        );

} export default WifiBill;