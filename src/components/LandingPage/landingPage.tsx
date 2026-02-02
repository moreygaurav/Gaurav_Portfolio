import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.css";

export default function Landing() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 maindiv d-flex justify-content-center align-items-center mt-5">

            {/* Image */}
            <div className="limg p-0 mb-0">
              <img
                src="./img/Limg.png"
                alt="Landing"
                className="img-fluid position-lg-absolute z-2"
              />
            </div>
   {/* text area 2 */}
          <div className="text2 col-12 z-1 px-3 text-white text-center fw-light mx-2">
            <p > REACT.JS | NODE.JS | JAVA | UI/UX - FIGMA | M.E.R.N STACK </p>
          </div>
            {/* Text */}
            <div className="textarea col-12  text-center z-0 px-3">
              <p className=" fw-bold ">
                WELCOME
              </p>
            </div>

          {/* text area 3 */}

          <div className="text3 d-flex col-12 col-lg-12 z-1 justify-content-between text-center align-content-center ">
            <div className="name ">
              <h1>Gaurav Morey</h1>
            </div>
            <div className="slogan ">
              <h5>DESIGN THAT SPEAKS.</h5>
              <h5>VALUES THAT CONVERT.</h5>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
