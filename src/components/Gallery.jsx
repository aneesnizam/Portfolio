import React from "react";
import "./Gallery.css";
import Img1 from "../assets/Book/img1.png";
import Img2 from "../assets/Book/img2.png";
import Img3 from "../assets/Book/img3.png";
import Img4 from "../assets/Book/img4.png";
import Img5 from "../assets/Book/img5.png";
import Img6 from "../assets/Book/img6.png";
import Img7 from "../assets/Book/img7.png";
import Img8 from "../assets/Book/img8.png";

const columnImages = [
  [Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8],
  [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4],
  [Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8],
  [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4],
  [Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8, Img5, Img6, Img7, Img8],
  [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4],
];

export default function Gallery() {
  return (
    <>
      <section id="transparent">
        <h1>Where Imagination Meets Innovation</h1>
      </section>

      <section id="book">
        {columnImages.map((images, index) => (
          <div key={index} className="column">
            <div className={`scroll ${index % 2 === 0 ? "down" : ""}`}>
              {images.map((img, i) => (
                <img key={i} src={img} alt={`Book ${i + 1}`} />
              ))}
            </div>
          </div>
        ))}
        <h1 className="textss">Where Imagination Meets Innovation</h1>
      </section>
    </>
  );
}
