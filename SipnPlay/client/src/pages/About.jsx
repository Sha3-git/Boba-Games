import "./About.css"
import Header from "../components/Header"
import someonecool from "../assets/images/someone.cool.png"
import bobahappy from "../assets/images/boba-happy.png"

function About() {
  return (
    <>
      <Header />
      <section className="all-about">
        <section class="about">
          <div class="about-img-wrapper">
            <div class="image-wrapper">
              <img src={someonecool} alt="someone cool" class="about-photo" />
            </div>
          </div>
          <div class="about-text">
            <h2 class="about-title">Who are we?</h2>
            <p class="about-description">
              Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all
              to become Sip & Play, Park Slope’s first board game cafe.  It is a straightforward concept, come in with
              your friends and family to play any board game from our library of 300+ games! We hope when you visit, you
              also enjoy our coffee, espresso, boba, sandwiches, and snacks!
            </p>
          </div>
        </section>

        <section class="mission">
          <div class="mission-text">
            <h2 class="mission-title">How it works?</h2>
            <p class="mission-description">
              Come on in with your friends and family and play boardgames from our collection of over 500+ games! Just
              $10 a person for 3 hours of gameplay. ($12 a person Friday-Sunday and Holidays) Play while enjoying bubble
              tea, coffee, beer sandwiches or salads and have a great time! If you want to guarantee a table, you can
              make a reservation which is $15 a person for 3 hours of gameplay. 
            </p>
          </div>
          <div class="mission-img-wrapper">
            <div class="image-wrapper">
              <img src={bobahappy} alt="pile of boardgames" srcset="" class="mission-photo" />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default About
