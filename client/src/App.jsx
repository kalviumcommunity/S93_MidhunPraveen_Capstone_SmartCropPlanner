import Navbar from "./components/Navbar";
import CropPlanner from "./components/CropPlanner";
import CropCard from "./components/CropCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      {/* HERO */}
      <section className="hero-section" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <div className="hero-badge">
            🌿 SMARTCROPPLANNER
          </div>

          <h1>
            Plan Better Crops,
            <br />
            Grow a <span>Brighter Future</span>
          </h1>

          <p className="hero-description">
            Get personalized crop recommendations based on
            your location, soil type and season.
          </p>

          <div className="benefits">

            <div className="benefit">
              <div className="benefit-icon">🌱</div>
              <div>
                <strong>Better Yield</strong>
                <small>Choose the right crop</small>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">🌿</div>
              <div>
                <strong>Healthy Soil</strong>
                <small>Use suitable crops</small>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">☀️</div>
              <div>
                <strong>Higher Profits</strong>
                <small>Plan for the right season</small>
              </div>
            </div>

          </div>

        </div>

        <CropPlanner />

      </section>


      {/* RECOMMENDED CROPS */}

      <section className="recommended-section" id="crops">

        <div className="section-top">

          <div className="section-heading">

            <div className="section-icon">
              🌿
            </div>

            <div>
              <h2>Recommended Crops</h2>

              <p>
                Based on your inputs, here are some suitable crops for you.
              </p>
            </div>

          </div>

          <a href="#crops" className="view-all">
            View All Crops →
          </a>

        </div>


        <div className="crop-grid">

          <CropCard
            crop="Rice"
            season="Kharif"
            soil="Clay"
            image="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=85"
            description="A popular crop for warm and water-rich farming regions."
            popular={true}
          />

          <CropCard
            crop="Wheat"
            season="Rabi"
            soil="Loamy"
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=85"
            description="A major Rabi crop that grows well in fertile loamy soil."
          />

          <CropCard
            crop="Groundnut"
            season="Zaid"
            soil="Sandy"
            image="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=700&q=85"
            description="A suitable crop for warm conditions and well-drained soil."
          />

        </div>

      </section>


      {/* SMART FARMING BANNER */}

      <section className="smart-farming">

        <div className="farming-image"></div>

        <div className="farming-content">

          <span className="farming-label">
            🌱 FARM SMARTER
          </span>

          <h2>
            Smarter Farming for a
            <span> Greener Tomorrow</span>
          </h2>

          <p>
            Make better farming decisions using location,
            soil and seasonal information.
          </p>

        </div>

        <div className="farming-features">

          <div>
            <span>🌴</span>
            <small>Healthy Farms</small>
          </div>

          <div>
            <span>🍃</span>
            <small>Sustainable Future</small>
          </div>

          <div>
            <span>🌱</span>
            <small>Better Lives</small>
          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-brand">
          🌿 <strong>SmartCrop<span>Planner</span></strong>
        </div>

        <div className="footer-message">
          Smarter Farming
          <b>•</b>
          Healthy Soil
          <b>•</b>
          A Greener Tomorrow
        </div>

        <div className="footer-social">
          <span>◉</span>
          <span>◉</span>
          <span>𝕏</span>
          <span>in</span>
        </div>

      </footer>

    </div>
  );
}

export default App;