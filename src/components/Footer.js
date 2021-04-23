import React from "react"
import logo from  "../images/logo_long.png"
import facebook from  "../images/facebook.png"
import instagram from  "../images/instagram.png"
import "./Footer.css"

export const Footer = () => (
  <div className="flex footer">
    <section className="footer__img">
      <img src={logo} alt="Logo" />
      <div className="footer--social-media">
        <img src={facebook} alt="Logo" />
        <img src={instagram} alt="Logo" />
      </div>
    </section>
    <section className="footer__section">
        <p className="dark">Contact Us</p>
        <p className="white">Email: info@finder.camp</p>
        <p className="white">Sign up for the newsletter</p>
    </section>
    <section className="footer__section footer__section--help">
        <p className="dark">Help</p>
        <p className="white">Terms</p>
        <p className="white">Privacy</p>
        <p className="white">Ask a question</p>
    </section>
    <section className="footer__section">
        <p className="dark">Camps</p>
        <p className="white">Browse by camp</p>
        <p className="white">Browse by category</p>
        <p className="white">Browse by age group</p>
        <p className="white">Browse by dates</p>
    </section>
    <section className="footer__section">
      <button onClick={Login}>Create an account or sign in</button>
      <button onClick={Search}>Find sessions</button>
    </section>
  </div>
)

const Login = () => {
  console.log("need to login")
}

const Search = () => {
  console.log("need to search")
}