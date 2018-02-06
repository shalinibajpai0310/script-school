import React, { Component } from 'react';
import '../app.css';


class RightInfoSection extends Component {
 
  render() {
      const spanStyle={
          color:'#4E4E4E'
      }

    return (
      <div>
          <div className="info-block">
                <div className="info-heading">News</div>
                <div className="info-content">
                    Explanation for all the answers will be added soon.
                </div>
            </div>
            <div className="info-block">
                <div className="info-heading">Recently Added</div>
                <div className="info-content">
                    <div>Promises</div>
                    <div>Reflect API</div>
                    <div>Proxy API</div>
                </div>
            </div>
            <div className="info-block">
                <div className="info-heading">About</div>
                <div className="info-content">
                    <div>RapidES6 is a flavour of Javascript. The site is developed to ease the availability of information related to the same.</div><br />
                    <div>This site is developed and maintained by - <span style={spanStyle}>RG</span></div><br />
                </div>
            </div>
        </div>
    );
  }
}

export default RightInfoSection;
