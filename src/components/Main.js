import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="school-manifesto"
          className={`${this.props.article === 'school-manifesto' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">School Manifesto</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            The purpose of 21st century school is not to teach, but to serve a social function, because knowledge is already accessible from anywhere, to anyone, for free.
          </p>
          <p>
            Promising developers (respectMyCode's students), contribute to real companies open-source problems, real day-to-day technical problems these companies are facing. The goal is not to compete for the best developer title, but for the most valuable developers one, given a specific project.
          </p>
          <p>
            To help you on this journey, volunteer CTOs and Head Of Engineerings act as mentors, throughout your career.
          </p>
          <p>
            Not all developers can fit all cultures, all management styles, and not all developers can become CTO for all projects. By focusing on where you deliver the most value naturally, you will develop a radical transparency on your skills and culture. That's where your efforts should be directed to, that's how CTOs are built.
          </p>
          <p>
            During the process, thanks to peer-to-peer learning, you will improve your architectural, communication and persuasion skills, while connecting with students able to change your career in the future.
          </p>
          <p>
            Recognition is something you deserve as value contributors. Consequently, once a year, we organize a coding ceremony to award the best contributors in various categories.
          </p>
          <p>
            We're fighting for remote working and the end of cv in tech industry. We always prioritize remote opportunities.
          </p>
          <p>
            <u>SCHOOL FEES</u>: FREE<br/>
            <u>ACCEPTANCE</u>: ON TEST<br/>
          </p>
          {close}
        </article>

        <article
          id="recruitment-without-cv"
          className={`${this.props.article === 'recruitment-without-cv' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Recruitment Without CV</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            A cv is nowadays too subjective, and doesn't take efficiently into account, contextual approaches and radical transparency.
          </p>
          <p>
            While traditional recruitments focus on hiring and asserting value contributors after recruitment, respectMyCode takes the opposite approach.
          </p>
          <p>
            We focus on asserting value contributors naturally, before they join you. Why? Because radical transparency on cultural fit and skills, is priceless. 
          </p>
          <p>
            Employers also engage with us on radical transparency. How? On making open-source, part of their ugliest and toughest code, they want potential hires to contribute on. It's essential for radical transparency to work both ways. 
          </p>
          <p>
            We want to ensure that you read a cv, only when you're about to hire a value contributor, not before. 
          </p>
          {close}
        </article>

        <article
          id="coding-ceremony"
          className={`${this.props.article === 'coding-ceremony' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Coding Ceremony</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            We acknowledge efforts and contributions of every student involved, and developers in general. That's why once a year we perform a coding ceremony to award best talents in these categories:
            <ul>
              <li>Best team</li>
              <li>Best duo</li>
              <li>Best architect</li>
              <li>Best team leader</li>
              <li>Best CTO</li>
              <li>Female developer of the year</li>
              <li>Male developer of the year</li>
              <li>Best problem solver</li>
            </ul>
          </p>
          <p>
            These categories may evolve.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            RespectMyCode has been created by Edouard Kombo in October 2019, with the aim of creating a closed community of tech thinkers and influencers.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
}

export default Main
