
import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Netsalary from './pages/Netsalary';
import GrossSalary from './pages/GrossSalary';
import Contactus from './pages/Contactus';
import Calculator from './pages/Calculator';
import Bonuspay from './pages/Bonuspay';
import Income from './pages/Income';
import Expense from './pages/Expense';
import ElectricityBill from './pages/ElectricityBill'
import WaterBill from './pages/WaterBill';
import Overtime from './pages/Overtime';
import WifiBill from './pages/WifiBill';
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <div>
    <Navbar />
    </div>
    <div>
      <Routes>
   
      <Route path="/" exact element={<Home />} ></Route>
      <Route path="/contactus" element={<Contactus/>} ></Route>
      <Route path="/calculator"  element={<Calculator />} ></Route>
      <Route path="/income" element={<Income/>}></Route>
      <Route path="/expense" element={<Expense/>}></Route>
      <Route path="/netsalary"  element={<Netsalary />} ></Route>
      <Route path="/grossSalary"  element={<GrossSalary />} ></Route>
      <Route path="/bonuspay" element={<Bonuspay />} ></Route>
      <Route path="/electricitybill" element={<ElectricityBill />} ></Route>
      <Route path="/waterbill" element={<WaterBill />} ></Route>
      <Route path="/overtime" element={<Overtime />} ></Route>
      <Route path="/wifibill" element={<WifiBill />} ></Route>
    
    </Routes>
  </div>
    </>
        
        
      
 
  );
}

export default App;
