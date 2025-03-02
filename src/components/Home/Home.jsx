import "../Home/Home.css"

export const Home = () => {
    return (

<main>
  <section className="home" id="home">
    <section className="parallax">
      <img src="/city.png" id="city" alt="city illustratie" />
      <img src="/water.png" id="water" alt="water illustratie" />
      <img src="/berg4.png" id="layer1" alt="berg illustratie" />
      <img src="/berg3.png" id="layer2" alt="berg illustratie" />
      <img src="/berg2.png" id="layer3" alt="berg illustratie" />
      <img src="/huis.png" id="layer4" alt="huis illustratie" />
      <img src="/bergje1.png" id="layer5" alt="berg illustratie" />
      <div id="text">
        <h1 className="home-title">Een nieuwe generatie hydrologen</h1>
        <h2><span className="home-content">Concreet op water en bodem</span></h2>
        <h3 className="home-scroll">scroll<span className="material-symbols-outlined">arrow_downward</span>
        </h3>
      </div>
      <img src="/grondmobilee.png" id="ground" alt="grond illustratie" />
      <img src="/bird.png" id="bird" alt="vogel illustratie" />
    </section>

    <section className="parallax2">
      <img src="/city-full.png" id="city2" alt="city illustratie" />
      <img src="/water-full.png" id="water2" alt="water illustratie" />
      <img src="/berg4-full.png" id="layer1-2" alt="berg illustratie" />
      <img src="/berg3-full.png" id="layer2-2" alt="berg illustratie" />
      <img src="/berg2-full.png" id="layer3-2" alt="berg illustratie" />
      <img src="/huisje-full.png" id="layer4-2" alt="huis illustratie" />
      <img src="/berg1-full.png" id="layer5-2" alt="berg illustratie"/>
      <div id="text2">
        <h1 className="home-title2">Een nieuwe generatie hydrologen</h1>
        <span className="home-content2">Concreet op water en bodem</span>
        <h3 className="home-scroll2">scroll<span className="material-symbols-outlined">arrow_downward</span></h3>
      </div>
      <img
        src="/backgroundfullfinall.png"
        id="ground2"
        alt="grond illustratie"
      />
      <img src="/bird-full.png" id="bird2" alt="vogel illustratie" />
    </section>
  </section>
</main>

    );
  };

  

