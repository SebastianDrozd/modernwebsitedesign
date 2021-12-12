import React,{useEffect,useState} from 'react'
import './Header.css'
import header from '../../assets/header.svg'
import photo from '../../assets/photo.svg'
const Header = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        function handleScroll() {
          setOffset(window.pageYOffset);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    return (
        <>
          <div className="header-outer-flex-container" style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
              <div className="header-inner-flex-item">
                  <div className="header-word-items">
                      <p  className="first-title">The future has arrived</p>
                      <p className="second-title animate__animated animate__fadeInUp">Welcome to the XP3 PROJECT</p>
                      <p className="description animate__animated animate__fadeInUp">The new generation of sound is here. Welcome to the world of the XP3 PROJECT and all that it has to offer. Immerse yourslef in a new world full of creative and function challenges</p>
                  </div>
              </div>
              <div className="header-inner-flex-item">
                  <div className="header-image">
                   
                  </div>
              </div>
             
              </div>  
        </>
    )
}

export default Header
