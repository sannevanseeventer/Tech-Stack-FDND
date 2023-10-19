import '../NavBar/NavBar.css';

export const Navbar = () => {
  return (

<div className="navbar">
  <div className="container flex-nav">
    <div className="nav-header">
      <img className="logo" src="/logo_spatwater.png" alt="logo spatwater" />
      <button className="nav-toggle" id="navToggle">
        <i className="ri-menu-line" />
      </button>
    </div>
    <nav className="nav-links" id="nav-links">
      <ul>
        <li className="nav-link"><a href="/">Home</a></li>
        <li className="nav-link"><a href="/over">Over</a></li>
        <li className="nav-link"><a href="/expertise">Expertise</a></li>
        <li className="nav-link"><a href="/#projecten">Projecten</a></li>
        <li className="nav-link"><a href="/#kennisbank">Kennisbank</a></li>
        <li className="nav-link"><a href="/team">Team</a></li>
        <li className="nav-link"><a href="/contact"><span>Contact</span></a></li>
      </ul>
    </nav>
  </div>
</div>

  );
};



