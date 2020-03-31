import React, { Component } from 'react'
import {Layout, Header, Navigation,} from 'react-mdl'
class DHeader extends Component{
    render(){
        return (
<div id="Head">
    <Layout style={{background: 'url(./bg.jpg) center / cover'}}>
        <Header transparent title="COVID-19 Map" style={{color: 'white'}}>
            <Navigation>
                <a href="http://www.santetunisie.rns.tn/">وزارة الصحة</a>
                <a href="http://www.onmne.tn/">اﻟﻤﺮﺻﺪ ﺍﻟﻮﻃﻨﻲ ﻟﻸﻣﺮﺍﺽ ﺍﻟﺠﺪﻳﺪﺓ ﻭﺍﻟﻤﺴﺘﺠﺪﺓ</a>
                <a href="https://www.who.int/ar">منظمة الصحة العالمية</a>
                <a href="https://ecstatic-davinci-a52b99.netlify.com/">Developer</a>
            </Navigation>
        </Header>
       
    </Layout>
</div>
        );
    }
}

export default DHeader;