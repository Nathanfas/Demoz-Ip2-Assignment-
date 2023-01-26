import React,{useState} from "react";
import { calculatorDropdown } from "./Navitems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
function Dropdown(){
    return(
        <>
        <ul className="calculator-submenu">
       { calculatorDropdown.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path} className={item.cName}>{item.title}</Link>
          </li>
        );
       })}



        </ul>
        </>
    );
}
export default Dropdown;