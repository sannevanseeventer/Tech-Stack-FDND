import '../Expertise/Expertise.css';

export const Expertise = () => {
  return (
    // Component code here

<section
  className="expertise section">
  <h2 className="expertise-title">Expertise</h2>

  <div className="expertise__wrapper">
    <div className="expertise__card">
      <img className="expertise3" src="/Untitled4.png" alt="Illustratie klimaatadaptatie"/>
      <h3>Klimaatadaptatie</h3>
      <a href="#klimaat" className="button">
        <p className="button_text2">Meer informatie</p>
      </a>
    </div>

    <div className="expertise__card">
      <img className="expertise2" src="/Untitled3.png" alt="Illustratie waterkwaliteit"/>
      <h3>Waterkwaliteit</h3>
      <a href="#waterkwaliteit" className="button">
        <p className="button_text2">Meer informatie</p>
      </a>
    </div>
    
    <div className="expertise__card">
      <img className="expertise2" src="/brainlogo.png" alt="Illustratie B-Rain"/>
      <h3> B-Rain</h3>
      <a href="#brain" className="button">
        <p className="button_text2">Meer informatie</p>
      </a>
    </div>
  </div>
</section>

  );
  };