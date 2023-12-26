import React from "react"
import Github from  '../assets/github.png'

const Footer = () => {
  return (
    <>
        <div className="social-links">
          <a href="https://github.com/LearnProjects89/color-box" target="_blank" rel="ln" className="custom-link">
              <img src={Github} alt="Github" className="custom-link" />
          </a>
        </div>
    </>
  )
}
export default Footer