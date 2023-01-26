import { useState } from "react";
import React from "react";
function Expense(){
    var [tran, settran]= useState();
    var[food,setfood]=useState();
    var[hea,sethea]=useState();
   var[ho,setho]= useState();
   var[ed,seted]= useState();
   var[en,seten]= useState();
   var[sv,setsv]= useState();
    var[tE,settE]=useState();
    var[ae,settae]=useState();
    
    function adde(){
        tE= parseInt(tran)+ parseInt(food)+ parseInt(hea)+ parseInt(ho)+ parseInt(ed)+ parseInt(en)+ parseInt(sv)+ parseInt(ae);
  settE(tE);
    }
    return(
        <div>
        <h2 className="expense">Expense Manager</h2>
       
    <text>  Transport :  </text> <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{settran(event.target.value);}} /> <br/>
  <text> Food:  </text> <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{setfood(event.target.value);}}/> <br/>
    <text> Health </text>  <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{sethea(event.target.value);}}/> <br/>
    <text>  House Rent :  </text> <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{setho(event.target.value);}}/> <br/>
  <text> Education:  </text> <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{seted(event.target.value);}} /> <br/>
    <text> Entertaiment:</text>  <br/>
    <input type="number" placeholder="Spending limit"onChange={(event)=>{seten(event.target.value);}} /> <br/>
    <text> Saving:</text>  <br/>
    <input type="number" placeholder="Spending limit" onChange={(event)=>{setsv(event.target.value);}}/> <br/>
{AddC()}<br/>
<button type="submit" onClick={adde}> Calculate</button><br/>
<text>Total Expense :</text> <input type="number" value={tE}/>

        </div>
    );
    
    function AddC(){
        const [inputList,setinputList]=useState([{new1:""}]);
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
                <label>New Category 1</label>
                <input type={"text"} name="new1" class="form-control" onChange={(event)=>{settae(event.target.value);}}></input>
            </div>
            <div className="form-group col-md-2 mt-4">
                {
                    inputList.length!==1 &&
                <button className="btn btn-danger mx-1" style={{marignButtom:10 }} onClick={handleremove}>Remove</button>
    }
               {inputList.length-1===i &&
                <button className="btn btn-success" onClick={handleaddclick} >Add More</button>
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

} export default Expense; 