import React from 'react'
import './Cta2.css'
import launch from '../../assets/launch.svg'
const Cta2 = () => {
    return (
        <>
           <div  id="section2" className="cta2-outer-flex">
               <div>
                   <h2 className="cta2-header">1000 years of Innovatoin culminates to this</h2>
               </div>
               <div style={ {display: 'flex',justifyContent: 'center'}}>
                   <div className="cta2-image" >
                       <img src={launch} width="400" height="400" alt="" />
                   </div>
                   <div className="cta2-image" >
                   <p className="cta2-item-title">Maintain the highest possible returns with the brighest transfers</p>
                   <p className="cta2-item-description">Praesent viverra varius tristique. Sed non nibh nec neque eleifend tincidunt. Vestibulum eu sodales nisl. Nunc at gravida justo. Sed eu quam ut justo pulvinar feugiat vitae vehicula magna. Curabitur fringilla nulla ut ligula ornare, et dictum lacus accumsan. Aenean vitae sapien a ligula tincidunt egestas sit amet sed libero. Nam efficitur neque nulla, sed pulvinar ex accumsan ac. Suspendisse tellus odio, euismod non varius et, luctus sit amet turpis. Integer nunc nisl, sodales non maximus ultrices, semper eget justo.</p>
                   </div>
               </div>
               </div> 
        </>
    )
}

export default Cta2
