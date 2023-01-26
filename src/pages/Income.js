import React, { useState } from "react";



function Income(){
    
    var [sala, setsala]= useState();
    var[com,setcom]=useState();
    var[gift,setgift]=useState();
    const [ad,setad]= useState();
    var[ti,setti]=useState();

    const [inputList,setinputList]=useState([{new1:""}]);
    
    function AddC(){
        const handleremove=index=>{
            const list=[...inputList];
            list.splice(index,1);
            setinputList(list);
        }
        const handleaddclick=()=>{
            setinputList([...inputList,{new1:''}]);}
return (
<div className="container">
    <div className="row">
    <div className="col-sm-12">
       { inputList.map( (x,i)=> {
        return(
        <div className="row mb-3">
            <div className="form-group col-md-4">
                <label>New Category </label>
                <input type={"number"} name="new1" class="form-control" onChange={(event)=>{setad(event.target.value);}}></input>
            </div>
            <div className="form-group col-md-2 mt-4">
                {
                    inputList.length!==1 &&
                <button className="btn btn-danger mx-1" style={{marignButtom:10 }} onClick={handleremove}>Remove</button>
    }
               {inputList.length-1===i &&
                <button className="btn btn-success" onClick={handleaddclick} name="add">Add More</button>
               }
                </div>
        </div>
        );
            })}
    </div>

    </div>

</div>
);
    }
   function tincome(){
    if (sala!==null || com !==null || gift!==null || ad!==null){
    ti= parseInt(sala)+ parseInt(com) + parseInt(gift) +parseInt(ad);
    setti(ti);
    }

   }
    
    return(
        <div>
        <h2 className="income"> Income Manager</h2>
        <text>  Salary :  </text> <br/>
        <input type="number" placeholder="0.0" onChange={(event)=>{setsala(event.target.value);}} /> <br/>
      <text> Comission:  </text> <br/>
        <input type="number" placeholder="0.0" onChange={(event)=>{setcom(event.target.value);}} /> <br/>
        <text> Gift </text>  <br/>
        <input type="number" placeholder="0.0" onChange={(event)=>{setgift(event.target.value);}}/> <br/>
        {AddC()} <br/>
        <button type="submit" onClick={tincome}>Calculate</button> <br/>
        <text> Total Income </text>  <br/>
        <input type="number" placeholder="0.0" value={ti} /> <br/> <br/>


    
 
</div>


    );
    
 
}



export default Income; 