import React, { Component } from 'react'
import {Card , CardText, CardActions, Button, CardTitle} from 'react-mdl'
class Stat extends Component{
    render(){
        return (
<div className="Stat">
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

</div>
</div>
        );
    }
}

export default Stat;