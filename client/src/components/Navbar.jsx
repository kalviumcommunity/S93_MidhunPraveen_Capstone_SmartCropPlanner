function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="brand">

        <span className="brand-leaf">
          🌿
        </span>

        <span>
          SmartCrop<span>Planner</span>
        </span>

      </a>


      <div className="nav-links">

        <a href="#home" className="active">
          🏠 Home
        </a>

        <a href="#planner">
          🍃 Crop Planner
        </a>

        <a href="#crops">
          🌱 Crops
        </a>

      </div>


      <div className="profile-icon">
        👤
      </div>

    </nav>
  );
}

export default Navbar;