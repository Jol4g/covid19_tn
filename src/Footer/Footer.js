import React from 'react'
import {Footer, FooterSection, FooterLinkList} from 'react-mdl'
import './footer.css'
class Foooter extends React.Component{
    render(){
        return (
          <div className="f">
          <Footer className="f1" size="mega" >
          <FooterSection className="f2" type="bottom" logo="&copy; Fedi Sarray">
              <FooterLinkList>
                  <a href="/">Help</a>
                  <a href="/">Privacy & Terms</a>
              </FooterLinkList>
          </FooterSection>
      </Footer>
      </div>
       )
    
}};

export default Foooter;