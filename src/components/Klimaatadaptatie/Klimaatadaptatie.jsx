import '../Klimaatadaptatie/Klimaatadaptatie.css';

export const Klimaatadaptatie = () => {
    return(
    // Component code here
    <div className="light-background">
 
  <section>
    <div className="inner-section">
      <div className="horizontal-flex-row">
        <div className="text-container">
          <h2>Klimaatadaptatie</h2>
          <p className="bold-text">Als meer dan 60% van een gemeente private grond is… dan is het noodzakelijk om deze grond klimaatadaptief te maken.</p>
          <p> Ons vertrekpunt is dat een groot deel van een gemeente bestaat uit private grond (tuinen, daken, bedrijventerreinen) en dat het absoluut noodzakelijk is dat deze private ruimte klimaatadaptief ingericht moet worden. Elk perceel vraagt om maatwerk, maar het is onmogelijk om elke tuin in te gaan.
          </p>

          <ul>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Hoe los je dit probleem op?</li>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Hoe zet je subsidiestromen efficiënt in?</li>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Hoe activeer je bewoners?</li>
          </ul>
        </div>

        <div className="image-container">
          <img className="image-klimaat" src="/projects1.png" alt=""/>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="inner-section">
      <div className="horizontal-flex-row">
        <div className="image-container">
          <img className="mobile-image" src="/projects4.png" alt=""/>
        </div>
        <div className="text-container">
          <h2>Gemeenten</h2>
          <p className="bold-text">
          Wij kunnen elke bewoner in uw gemeente een persoonlijk klimaatadaptief advies geven zonder elke tuin in te gaan.
          </p>
          <p>Wij gebruiken ruimtelijke data en sociale kennis uit de buurt om de gemeente gedetailleerd in kaart te brengen. In combinatie met veldwerk kunnen wij op postcode, buurt of wijkniveau klimaatadaptieve maatregelen personaliseren en prioriteren in de private ruimte. Hiermee maken wij de private ruimte waterrobuust, waterveilig, hitte- en droogtebestendig.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="inner-section">
      <div className="horizontal-flex-row">
        <div className="text-container">
          <h2>Bedrijventerreinen</h2>
          <p className="bold-text">
          Bedrijventerreinen zijn vaak versteend, privaat terrein met veel oppervlakte.
          </p>
          <p>
          SPATwater richt zich op het activeren van werknemers en bedrijven door vraag en aanbod op het gebied van water bij elkaar te brengen door middel van ruimtelijke data en geeft handvatten om bedrijventerreinen te vergroenen.
          </p>
          <ul>
          <li><i className="fa fa-arrow-right" aria-hidden="true"/> Het uitvoeren van stakeholders/netwerk analyses</li>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Co-creatie sessie organiseren</li>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Het uitvoeren van restwaterscans</li>
            <li><i className="fa fa-arrow-right" aria-hidden="true"/>  Het uitvoeren van klimaatanalyses en het koppelen van relevante maatregelen</li>
          </ul>
        </div>
        <div className="image-container">
          <img className="image-klimaat" src="/verg.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
  </div>

    );
  };