import React, { useState } from "react";

function GrossSalary ()  {
var [net, setnet]=useState();
var [gsalary, setgsalary]=useState();
var [inrate, setinrate]=useState();
var [intax, setintax]=useState();
var [pens, setpens]=useState();


var s,h;
function cal(){
    
    if(net>=7900){
        
        h=1- 0.35- 0.07;
        s=parseInt(net)-1500 ;
        inrate= "35%, deductible= 1500";
        gsalary=   s/ h;
        intax= ((parseInt(gsalary)* 0.35)-1500);
    }
    else if(net>=5900 && net <7900){
        h=1- 0.30- 0.07;
        s=parseInt(net)-955 ;
        inrate= "30%, deductible= 955.00";
        gsalary=  s/ h;
        intax= ((gsalary* 0.30)- 955);
    }
    else if(net>=4200 && net <5900){
       
        h=1- 0.25- 0.07;
        s=parseInt(net)-565 ;
        inrate= "25%, deductible= 565.00";
        gsalary=  s/ h;
        intax= ((gsalary* 0.25)- 565);
    }
    else if(net>=2700 && net <4200){
        h=1- 0.20- 0.07;
        s=parseInt(net)-302.5 ;
        inrate= "20%, deductible= 302.50";
        gsalary=  s/ h;
        intax= ((gsalary* 0.20)- 302.50);

    }
else if(net>=1500 && net <2700){

    h=1- 0.15- 0.07;
    s=parseInt(net)-142.5 ;
    inrate= "15%, deductible= 142.50";
    gsalary=  s/ h;
    intax= ((gsalary* 0.15)-142.50);
}
else if(net>=601 && net <1500){
    h=1- 0.10- 0.07;
    s=parseInt(net)-60 ;
    inrate= "10%, deductible= 60.00";
    gsalary=  s/ h;
    intax= ((gsalary* 0.10)-60);
}
else if(net<600){
    intax="0.00";
    h=1- 0.07;
    s=parseInt(net);
    gsalary=  s/ h;
    inrate= "0%, deductible=0.00";
 }

pens=gsalary*7/100;
pens= pens.toFixed(2);
gsalary= gsalary.toFixed(2);
intax= intax.toFixed(2);
setgsalary(gsalary);
setinrate(inrate);
setpens(pens);
setintax(intax);
}

    return (
    <div>
    <h2 className="grossSalary">Calculate Your Gross Salary </h2>
    <text> Expected Net Salary :  </text> <br/>   
    <input type="number" placeholder="0.0"  onChange={(event)=>{setnet(event.target.value);}}/> <br/>
    <button type="submit" onClick={cal}>Calculate</button><br/><br/>

    <text> Gross Salary :  </text> <br/>   
    <input type="text" placeholder="0.0" value={gsalary}/> <br/>
    <text> Income Tax Rate :  </text> <br/>   
    <input type="text" placeholder="0.0" value={inrate} /> <br/>
    <text> Income Tax :  </text> <br/>   
    <input type="text" placeholder="0.0" value={intax} /> <br/>
    <text> Pension :  </text> <br/>   
    <input type="text" placeholder="0.0" value={pens}/> <br/>
   
    </div>
    );
    }
    export default GrossSalary;