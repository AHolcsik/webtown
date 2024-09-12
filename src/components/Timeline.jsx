import { useEffect } from "react";
import { Carousel } from "bootstrap";

function Timeline() {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel .carousel-item");

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  });

  return (
    <>
      <div className="navigation">
        <a
          className="carousel-control-prev w-aut"
          href="#carousel"
          role="button"
          data-bs-slide="prev"
        />
        <a
          className="carousel-control-next w-aut"
          href="#carousel"
          role="button"
          data-bs-slide="next"
        />
      </div>
      <div className="my-3">
        <div className="carousel-wrapper row my-auto justify-content-center">
          <div
            id="carousel"
            className="carousel slide"
            data-bs-wrap="false"
            data-bs-touch="true"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src="assets/002.jpg"
                        className="img-fluid d-block w-100"
                        alt="002.jpg"
                      />
                      <p className="card-title">Fusce a magna pellentesque</p>
                      <p className="card-text">
                        Morbi feugiat nisi in felis maximus, vel sollicitudin
                        dui commodo. Integer blandit non odio a congue. Maecenas
                        in aliquet nisl. Integer maximus et.
                      </p>
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
                <div className="date-wrapper">
                  <div className="vertical-line">
                    {/* <p>July</p>
                    <p>2025</p> */}
                  </div>
                </div>
              </div>

              <div className="carousel-item mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src="assets/001.jpg"
                        className="img-fluid d-block w-100"
                        alt="001.jpg"
                      />
                      <p className="card-title">
                        Nunc bibendum felis in varius laoreet
                      </p>
                      <p className="card-text">
                        Morbi feugiat nisi in felis maximus, vel sollicitudin
                        dui commodo. Integer blandit non odio a congue. Maecenas
                        in aliquet nisl. Integer maximus et.
                      </p>
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
                <div className="date-wrapper">
                  <div className="vertical-line">
                    {/* <p>Mayy</p>
                    <p>2024</p> */}
                  </div>
                </div>
              </div>

              <div className="carousel-item mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src="assets/003.jpg"
                        className="img-fluid d-block w-100"
                        alt="003.jpg"
                      />
                      <p className="card-title">Quisque sed ultricies justo</p>
                      <p className="card-text">
                        Feugiat nisi in felis maximus, vel sollicitudin dui
                        commodo. Integer blandit non odio a congue. Maecenas in
                        aliquet nisl. Integer maximus et...
                      </p>
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
                <div className="date-wrapper">
                  <div className="vertical-line">
                    {/* <p>March</p>
                    <p>2023</p> */}
                  </div>
                </div>
              </div>
              <div className="carousel-item mb-4">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="card-img">
                      <img
                        src="assets/006.jpg"
                        className="img-fluid d-block w-100"
                        alt="006.jpg"
                      />
                      <p className="card-title">Nullam elementum vestibulum</p>
                      <p className="card-text">
                        Morbi feugiat nisi in felis maximus, vel sollicitudin
                        dui commodo. Integer blandit non odio a congue. Maecenas
                        in aliquet nisl. Integer maximus et.
                      </p>
                      <a href="#">View More</a>
                    </div>
                  </div>
                </div>
                <div className="date-wrapper">
                  <div className="vertical-line">
                    {/* <p>June</p>
                    <p>2007</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
