import React from "react";
import './home.css';
import Image from '../image/—Pngtree—file blue u.s. tax day_6137296.png';

function Home ()  {
    return (
                        
        <div class="container1">
             <div class="tbox">
                <h1 id="homeh1">Demoz calculator</h1>
                <p>Demoz is your Salalry calculator here you can calulate your Netsalary, GrossSalalry, overtime pay, Bonus Pay, monthly inclome and expense and manage your electric and water bills</p>
                <a class="link1" href="./Calculator">Calculator</a>
            </div>
            <div class="user-box">
                <img src={Image} alt="home page img" />           
            </div>
      </div>
    );
}
    export default Home;