import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.css"

export default function Landing() {
  return (
    <section>
      <div className="bgdiv col-11 col-lg-11 mt-5 ">
        {/* job roles */}
        <img src="./img/JobRoles.svg" alt="Job Roles" className="JRImg  " />

        <img src="./img/Other.png" alt="Other img" className="Other  d-block" />
        <img src="./img/Slogun.png" alt="Slogun img" className="Slogunimg" />

        <img src="./img/CREATIVE.png" alt="background img" className="BGImg" />

        <img src="./img/HEROimg.png" alt="Landing img" className="HEROImg" />

        <img src="./img/reactdev.png" alt="" className="reactdev " />

        {/* Social media links  */}
        {/* github link */}
        <a href=" https://github.com/moreygaurav?tab=">
          <img src="./img/github.png" alt="Github img" className="githubimg" />
        </a>

        {/* linkedin img */}
        <a href="https://www.linkedin.com/in/gaurav-morey-272315243/ ">
          <img src="./img/linkdin.png" alt="Github img" className="linkdimg" />
        </a>

        {/* facebook img */}
        <a href="https://www.facebook.com/gsuravpradeemorey.morey/">
          <img src="./img/facebook.png" alt="Github img" className="facebookimg" />
        </a>
        {/* instagram img */}
        <a href="https://www.instagram.com/ign_gaurav/">
          <img src="./img/instagram.png" alt="Github img" className="instagramimg" />
        </a>
        {/* whatsapp img */}
        <a href="mailto:gauravmorey27@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <img src="./img/whatsapp.png" alt="Github img" className="whatsappimg" />
        </a>

        <img src="./img/Description.PNG" alt="Description img" className="Description" />
      </div>
    </section>
  );
}
