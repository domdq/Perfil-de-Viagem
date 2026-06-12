import "./About.css";
import perfil from "../../assets/Perfil.png";
import map from "../../assets/map.svg";
import aviao from "../../assets/aviao.svg";
import galery from "../../assets/galery.svg";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-section">
          <div className="main-about">
            <img src={perfil} alt="" />
            <div className="main-text">
              <h1>Isabela Torres</h1>
              <p>
                Amante de viagens, cultura e gastronomia. 🌍✈️ <br />
                Aqui compartilho as histórias registradas em cada <br /> clique,
                explorando cantinhos fascinantes do nosso <br />
                planeta a partir da movimentada cidade de São <br /> Paulo. 🏙️📸
              </p>
            </div>
          </div>
          <div className="info">
            <div className="icones-info">
              <img src={map} alt="" />
              <p>São Paulo, Brazil</p>
            </div>
            <div className="icones-info">
              <img src={aviao} alt="" />
              <p>37 países</p>
            </div>{" "}
            <div className="icones-info">
              <img src={galery} alt="" />
              <p>240 fotos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
