import React from "react";
import "./calc.css"
import Image1 from '../image/wallet-g1e592f892_1920.jpg';
import Image2 from '../image/money-163502.jpg';
import Image3 from '../image/wrist-watch-941249_1920.jpg';
import Image4 from '../image/gift-7724803_1920.jpg';
import Image5 from '../image/electricity-7565024_1920.jpg';
import Image6 from '../image/counter-2265065_1920.jpg';
import Image7 from '../image/wifi-router-wireless.jpg';
function Calculator  () {
    return (
    
        <div class="container2">
            <div class="box">
            <div class="imgBx">
                <img src={Image1} alt=""/>
            </div>
            <div class="content">
                <div>
                    <h2>Netsalary</h2>
                   
                    <a class="link1" href="./Netsalary">calculate</a>
                </div>
            </div>
            </div> 
            <div class="box">
                <div class="imgBx">
                <img src={Image2} alt=""/>
                </div>
                <div class="content">
                    <div>
                        <h2>GrossSalalry</h2>
                        
                        <a class="link1" href="./GrossSalary">calculate</a>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                <img src={Image3} alt=""/>
                </div>
                <div class="content">
                    <div>
                        <h2>Overtime</h2>
                        
                        <a class="link1" href="./Overtime">calculate</a>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="imgBx">
                <img src={Image4} alt=""/>
                </div>
                <div class="content">
                    <div>
                        <h2>Bonus pay</h2>
                        
                       
                        <a class="link1" href="./Bonuspay">calculate</a>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                <img src={Image5} alt=""/>
                </div>
                <div class="content">
                <div>
                    <h2>electric bill</h2>
                    
                    <a class="link1" href="./ElectricityBill">calculate</a>
                </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                <img src={Image6} alt=""/>
                </div>
                <div class="content">
                <div>
                    <h2>water bill</h2>
                   
                    <a class="link1" href="./WaterBill">calculate</a>
                </div>
                </div>
            </div>
            <div class="box">
                <div class="imgBx">
                <img src={Image7} alt=""/>
                </div>
                <div class="content">
                <div>
                    <h2>Wifi bill</h2>
                    
                    <a class="link1" href="./WifiBill">calculate</a>
                </div>
                </div>
            </div>
        </div>
    
    );
}
export default Calculator;