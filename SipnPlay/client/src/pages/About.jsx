import "./About.css"
import Header from "../components/Header"
import someonecool from "../assets/images/someone.cool.png"
import bobahappy from "../assets/images/boba-happy.png"

function About() {
  return (
    <>
      <Header />
      <section className="all-about">
        <section className="about">
          <div className="about-img-wrapper">
            <div className="image-wrapper">
              <img src={someonecool} alt="someone cool" className="about-photo" />
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-title">Who are we?</h2>
            <p className="about-description">
              Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all
              to become Sip & Play, Park Slope’s first board game cafe.  It is a straightforward concept, come in with
              your friends and family to play any board game from our library of 300+ games! We hope when you visit, you
              also enjoy our coffee, espresso, boba, sandwiches, and snacks!
            </p>
          </div>
        </section>

        <section className="mission">
          <div className="mission-text">
            <h2 className="mission-title">How it works?</h2>
            <p className="mission-description">
              Come on in with your friends and family and play boardgames from our collection of over 500+ games! Just
              $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) Play while enjoying bubble
              tea, coffee, beer sandwiches or salads and have a great time! If you want to guarantee a table, you can
              make a reservation which is $15 a person for 3 hours of gameplay. 
            </p>
          </div>
          <div className="mission-img-wrapper">
            <div className="image-wrapper">
              <img src={bobahappy} alt="pile of boardgames" srcset="" className="mission-photo" />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default About
