import React from "react"
import imgOne from "../images/Img1_ComingSoonSearchTool.jpg"
import imgTwo from "../images/Img2_howItWorksForParents.jpg"
import imgThree from "../images/Img3_AboutUs.jpg"
import imgFour from "../images/Img4_campsHowItWorks.jpg"
import "./Body.css"

export const Body = () => (
  <div className="main">
    <img src={imgOne} alt="Coming Soon Search Tool" />
    <img src={imgTwo} alt="Coming Soon Search Tool" />
    <img src={imgThree} alt="Coming Soon Search Tool" />
    <img src={imgFour} alt="Coming Soon Search Tool" />
  </div>
)
