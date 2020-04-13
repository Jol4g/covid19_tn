import React, { Component } from 'react'
import {Layout, Header, Navigation,} from 'react-mdl'
class DHeader extends Component{
    render(){
        return (
<div id="Head">
    <nav><ul className="topnav">
    <span>Covid-19 Map TN</span>
        <li>    <a href="http://www.santetunisie.rns.tn/">وزارة الصحة</a></li>
        <li>       <a href="http://www.onmne.tn/">اﻟﻤﺮﺻﺪ ﺍﻟﻮﻃﻨﻲ ﻟﻸﻣﺮﺍﺽ ﺍﻟﺠﺪﻳﺪﺓ ﻭﺍﻟﻤﺴﺘﺠﺪﺓ</a></li>
        <li>   <a href="https://www.who.int/ar">منظمة الصحة العالمية</a></li>
        <li>    <a id="f" href="https://fedisarray.netlify.com/">Developer</a></li> 
        </ul>
  </nav>
           
</div>
        );
    }
}

export default DHeader;