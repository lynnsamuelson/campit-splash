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

  if(window.innerWidth <= 350) {
    return (
      <div className="flex footer mobile__footer">
        <img src={logo} alt="Logo" />
        <a href="https://www.facebook.com/CampIt-A-Camp-Finder-Tool-104802718280786" target="_blank" class="logo">
          <img src={facebook} alt="Logo" />
        </a>
        <a href="https://www.instagram.com/campit.app/" target="_blank" class="logo">
          <img src={instagram} alt="Logo" />
        </a>
      </div>  
    )
  } else {
    return (
      <div className="flex footer">
        <section className="footer__img">
          <img src={logo} alt="Logo" />
          <div className="footer--social-media">
            <a href="https://www.facebook.com/CampIt-A-Camp-Finder-Tool-104802718280786" target="_blank">
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
            <p className="white"><a href="https://docs.google.com/forms/d/e/1FAIpQLSes4C2o6qBKxd0OMPzhDqvPDdIhja8jzByhN4OduoTvG2uBCA/viewform" target="_blank">Ask a question</a></p>
        </section>
        <section className="footer__section">
            <p className="dark">Camps</p>
            <p className="white">Browse by:</p>
            <p className="white">camp</p>
            <p className="white">category</p>
            <p className="white">age group</p>
            <p className="white">dates</p>
        </section>
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
}