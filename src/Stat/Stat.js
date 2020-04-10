import React, { Component } from 'react'
import {Card , CardText, CardActions, Button, CardTitle} from 'react-mdl'
import {SocialMediaIconsReact} from 'social-media-icons-react';
class Stat extends Component{
    render(){
        return (
<div className="Stat">
<div className="date">Last Update: 09/04/2020</div>
<Card id="card1" shadow={0} style={{width: '300px', height: '320px', margin: 'auto'}}>
        <CardTitle expand style={{color: '#fff', background: 'url(./card1.jpg) bottom right 100% no-repeat #46B6AC'}}>COVID-19</CardTitle>
    <CardText>
    CORONAVIRUS COVID-19
Les Coronavirus sont une grande famille de virus, qui provoquent des maladies...
    </CardText>
    <CardActions border>
        <Button colored><a href="http://coronavirus.rns.tn/">Link</a></Button>
    </CardActions>
</Card>
<div id="social">
<SocialMediaIconsReact icon="twitter" url="https://twitter.com/fedi_sarray"/>
<SocialMediaIconsReact icon="linkedin" url="https://tn.linkedin.com/in/fedisarray"/>
<SocialMediaIconsReact icon="facebook" url="https://facebook.com/jol4g"/>
<SocialMediaIconsReact icon="github" url="https://github.com/Jol4g/"/>
</div>
</div>
        );
    }
}

export default Stat;