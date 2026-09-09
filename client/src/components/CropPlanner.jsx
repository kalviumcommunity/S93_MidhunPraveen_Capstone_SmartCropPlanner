import { useState } from "react";

function CropPlanner() {

  const [location, setLocation] = useState("");
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!location || !soil || !season) {

      setMessage(
        "Please enter your location, soil type and season."
      );

      return;
    }

    setMessage(
      `🌱 Great! Crop suggestions are ready for ${location}.`
    );
  };


  return (

    <div className="planner-card" id="planner">

      <div className="planner-heading">

        <div className="planner-icon">
          🌿
        </div>

        <div>

          <h2>Crop Planner</h2>

          <p>
            Enter your details to get personalized crop suggestions.
          </p>

        </div>

      </div>


      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <label>
            📍 Location
          </label>

          <input
            type="text"
            placeholder="Enter your location (e.g. Kerala)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        </div>


        <div className="planner-row">

          <div className="input-group">

            <label>
              🌱 Soil Type
            </label>

            <select
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
            >

              <option value="">
                Select soil type
              </option>

              <option value="Clay">
                Clay
              </option>

              <option value="Loamy">
                Loamy
              </option>

              <option value="Sandy">
                Sandy
              </option>

              <option value="Black Soil">
                Black Soil
              </option>

            </select>

          </div>


          <div className="input-group">

            <label>
              📅 Season
            </label>

            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >

              <option value="">
                Select season
              </option>

              <option value="Kharif">
                Kharif
              </option>

              <option value="Rabi">
                Rabi
              </option>

              <option value="Zaid">
                Zaid
              </option>

            </select>

          </div>

        </div>


        <button
          type="submit"
          className="planner-button"
        >

          🌿 Get Crop Suggestions

          <span>→</span>

        </button>


        {message && (

          <div className="planner-message">
            {message}
          </div>

        )}

      </form>


      <div className="planner-footer">

        <span>✨</span>

        Smart choices for healthy harvests

        <span>🌱</span>

      </div>

    </div>
  );
}

export default CropPlanner;