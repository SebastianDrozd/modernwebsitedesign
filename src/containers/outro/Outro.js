import React from 'react'
import './Outro.css'
import tree from '../../assets/tree.svg'
const Outro = () => {
    return (
        <>
        <div  id="section3" className="outro-outer-container" style={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
            <div className="outro-image">
                <img src={tree} height="700" width="700" alt="" />
            </div>
            <div className="outro-text">
                <h1 className="outro-top-header">Optimize the world at your convenience</h1>
                <p className="outro-top-sub">Praesent viverra varius tristique. Sed non nibh nec neque eleifend tincidunt. Sed non nibh nec neque eleifend tincidunt Sed non nibh nec neque eleifend tincidunt Sed non nibh nec neque eleifend tincidunt Vestibulum eu sodales nisl. Nunc at gravida justo. Sed eu quam ut justo pulvinar feugiat vitae vehicula magna. Curabitur fringilla nulla ut ligula ornare, et dictum lacus accumsan. Aenean vitae sapien a ligula tincidunt egestas sit amet sed libero. Nam efficitur neque nulla, sed pulvinar ex accumsan ac. Suspendisse tellus odio, euismod non varius et, luctus sit amet turpis. Integer nunc nisl, sodales non maximus ultrices, semper eget just</p>
                <br />
                
                <button className="outro-button">Get Started</button>
            </div>
        </div>
            
        </>
    )
}

export default Outro
