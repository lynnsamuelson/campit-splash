import React, {useState} from "react"
import logo from  "../images/logo_long.png"
import facebook from  "../images/facebook.png"
import instagram from  "../images/instagram.png"
import "./Footer.css"

export const Footer = () => {
  const [showOverlay] = useState(true)

  const Login = () => {
    console.log("need to login")
  }
  
  const Search = () => {
    console.log("need to search")
  }

  return (
    <div className="flex footer">
      <section className="footer__img">
        <img src={logo} alt="Logo" />
        <div className="footer--social-media">
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt="Logo" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagram} alt="Logo" />
          </a>
        </div>
      </section>
      <section className="footer__section">
          <p className="dark">Contact Us</p>
          <p className="white"><a href="mailto:info@finder.camp">Email: info@finder.camp</a></p>
          <div className="newletter__overlay">
            <p className="white">Sign up for the newsletter</p>
            <div className="newsletter">
              <h3 className="newsletterh3">Coming Soon!</h3>
            </div>
          </div>
      </section>
      <section className="footer__section footer__section--help">
          <p className="dark">Help</p>
          <p className="white">Terms</p>
          <p className="white">Privacy</p>
          <p className="white">Ask a question</p>
      </section>
      { window.innerWidth < 925  ? 

       ( <section className="footer__section">
          <p className="dark">Camps</p>
          <p className="white">Browse by:</p>
          <p className="white">camp</p>
          <p className="white">category</p>
          <p className="white">age group</p>
          <p className="white">dates</p>
      </section>)
     : 
        (<section className="footer__section">
          <p className="dark">Camps</p>
          <p className="white">Browse by camp</p>
          <p className="white">Browse by category</p>
          <p className="white">Browse by age group</p>
          <p className="white">Browse by dates</p>
      </section>)
}
      
      <section className="footer__section">
        <button onClick={Login}>Create an account or sign in</button>
        <button onClick={Search}>Find sessions</button>
        <div className="overlay">
          <h3>Coming Soon!</h3>
        </div>
      </section>
    </div>  
  )
}