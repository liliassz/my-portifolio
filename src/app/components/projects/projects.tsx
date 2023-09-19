import { SectionTitle } from "../sectionTitle/section-title";
import "./projects.scss";

export function Projects() {
  return (
    <div className="projects">
      <SectionTitle text="Projects" />
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img 
                  className="card-img" 
                  src="/mee2.png" 
                  alt="aaa" />
                </div>
              </div>

              <div className="card-content">
                <h2 className="name">Elias Souza</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
