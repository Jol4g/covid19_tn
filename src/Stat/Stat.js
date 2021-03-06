import React, { Component } from 'react'
import {SocialMediaIconsReact} from 'social-media-icons-react';
class Stat extends Component{
    render(){
        return (
<div className="card">
<div id="social">
<SocialMediaIconsReact icon="twitter" url="https://twitter.com/fedi_sarray"/>
<SocialMediaIconsReact icon="linkedin" url="https://tn.linkedin.com/in/fedisarray"/>
<SocialMediaIconsReact icon="facebook" url="https://facebook.com/jol4g"/>
<SocialMediaIconsReact icon="github" url="https://github.com/Jol4g/"/>
<div className="date"><span>Last Update: 12/04/2020</span><span id="name">© Fedi Sarray</span></div>
</div>
</div>
        );
    }
}

export default Stat;