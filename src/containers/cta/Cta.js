import React from 'react'
import './Cta.css'
import per from '../../assets/per.svg'
import photo from '../../assets/photo.svg'
import feature from '../../assets/feature.svg'
import startup from '../../assets/startup.svg'
const Cta = () => {
    return (
        <>
            <div  id="section1" className="cta-container" style={{display: 'flex',justifyContent: 'center',flexDirection: 'column'}}>
                <div style={{display: 'flex',flexDirection: 'column'}}>
                <p className="cta-header">Blur the lines between Imagination and Reality</p>
                <p className="cta-sub">Our interactive UI Test platform is a fun way to help develop an eye for design.</p>
                </div>
                <div className="cta-images" style={{display: 'flex',justifyContent: 'space-evenly',alignItems: 'center'}}>
                  <div className="individual-cta">
                    <img src={photo} height="200" width="200" alt="" />
                    <p className="item-title">Continous Integration</p>
                    <p className="item-description">With our plan you can rest assured there will be nothing wrong with you what igoing on in your plan. will be nothing wrong with you what igoing on in your plan</p>
                  </div>
                  <div className="individual-cta">
                    <img src={feature} height="200" width="200" alt="" />
                    <p className="item-title">Maximum deployment</p>
                    <p className="item-description">With our plan you can rest assured there will be nothing wrong with you what igoing on in your plan. will be nothing wrong with you what igoing on in your plan</p>
                  </div>
                  <div className="individual-cta">
                    <img src={startup} height="200" width="200" alt="" />
                    <p className="item-title">Non stop supervision</p>
                    <p className="item-description">With our plan you can rest assured there will be nothing wrong with you what igoing on in your plan will be nothing wrong with you what igoing on in your plan.</p>
                  </div>
                 
              </div>
              
            </div>
            <br />
                
        </>
    )
}

export default Cta
