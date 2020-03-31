import React, { Component } from 'react'
import {Layout, Header, Navigation,} from 'react-mdl'
class DHeader extends Component{
    render(){
        return (
<div id="Head">
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="http://www.santetunisie.rns.tn/">وزارة الصحة</a>
                <a href="http://www.onmne.tn/">اﻟﻤﺮﺻﺪ ﺍﻟﻮﻃﻨﻲ ﻟﻸﻣﺮﺍﺽ ﺍﻟﺠﺪﻳﺪﺓ ﻭﺍﻟﻤﺴﺘﺠﺪﺓ</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
       
    </Layout>
</div>
        );
    }
}

export default DHeader;