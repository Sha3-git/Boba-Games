import "./Games.css"
import Header from "../components/Header"
import catan from "../assets/images/catan@2x.png"

function Games() {
  return (
    <>
      <Header />
      {/* <h2 className="main">Check out our games</h2>
      <h3 className="staff">some of our faves!</h3> */}
      <section className="boardgame">
        <div className="card">
          <div className="imgBg">
            <img src={catan} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                CATAN <br />
                <span>Something about something</span>
              </h2>
              <div className="data">
                <h3>
                  Players
                  <br />
                  <span>3-4</span>
                </h3>
                <h3>
                  Age
                  <br />
                  <span>10+</span>
                </h3>
                <h3>
                  Play Time
                  <br />
                  <span>2 hrs</span>
                </h3>
              </div>
              <div className="description">
                <h3>
                  Description
                  <br />
                  <span>Settlers of Catan is a strategy board game involving smart resource management.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBg">
            <img src={catan} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                CATAN <br />
                <span>Something about something</span>
              </h2>
              <div className="data">
                <h3>
                  Players
                  <br />
                  <span>3-4</span>
                </h3>
                <h3>
                  Age
                  <br />
                  <span>10+</span>
                </h3>
                <h3>
                  Play Time
                  <br />
                  <span>2 hrs</span>
                </h3>
              </div>
              <div className="description">
                <h3>
                  Description
                  <br />
                  <span>Settlers of Catan is a strategy board game involving smart resource management.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imgBg">
            <img src={catan} alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                CATAN <br />
                <span>Something about something</span>
              </h2>
              <div className="data">
                <h3>
                  Players
                  <br />
                  <span>3-4</span>
                </h3>
                <h3>
                  Age
                  <br />
                  <span>10+</span>
                </h3>
                <h3>
                  Play Time
                  <br />
                  <span>2 hrs</span>
                </h3>
              </div>
              <div className="description">
                <h3>
                  Description
                  <br />
                  <span>Settlers of Catan is a strategy board game involving smart resource management.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Games
