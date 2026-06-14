import "./SectionImg.css";
import image1 from "../../assets/Image-1.png";
import image2 from "../../assets/Image-2.png";
import image3 from "../../assets/Image-3.png";
import image4 from "../../assets/Image-4.png";
import image5 from "../../assets/Image-5.png";
import image6 from "../../assets/Image-6.png";
import image7 from "../../assets/Image-7.png";
import image8 from "../../assets/Image-8.png";

const imagens = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

export default function SectionImg() {
  return (
    <div>
      <div className="container">
        <section>
          {imagens.map(function renderizar(img) {
            return <CardImg valor={img} />;
          })}
        </section>
      </div>
    </div>
  );
}

function CardImg(props) {
  return <img className="fotos" src={props.valor} />;
}
