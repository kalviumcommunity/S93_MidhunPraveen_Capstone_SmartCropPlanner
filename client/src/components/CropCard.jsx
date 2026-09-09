function CropCard({
  crop,
  season,
  soil,
  image,
  description,
  popular
}) {
  return (
    <article className="crop-card">

      <div className="crop-photo">

        <img
          src={image}
          alt={crop}
        />

        {popular && (
          <span className="popular-badge">
            ⭐ Popular
          </span>
        )}

      </div>


      <div className="crop-card-content">

        <h3>
          🌾 {crop}
        </h3>

        <div className="crop-info">

          <p>
            📅 <strong>Season:</strong> {season}
          </p>

          <p>
            🌱 <strong>Soil:</strong> {soil}
          </p>

        </div>

        <p className="crop-description">
          {description}
        </p>

        <button className="details-button">
          View Details
          <span>→</span>
        </button>

      </div>

    </article>
  );
}

export default CropCard;