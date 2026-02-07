import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./landing.css";

export default function Landing() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLImageElement | null>(null);
  const bgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    if (!container || !hero) return;

    // PERFORMANCE + NO WHITE FLASH
    gsap.set([hero, ...bgRefs.current], {
      transformStyle: "preserve-3d",
      willChange: "transform",
      force3D: true,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;

      // SIDE-TO-SIDE ONLY
      const intensity = (x - centerX) / centerX;
      const rotateY = intensity * 12; // premium tilt
      const moveX = intensity * 18;

      // HERO (main focus)
      gsap.to(hero, {
        rotateY,
        x: moveX,
        scale: 1.04,
        transformPerspective: 1400,
        duration: 0.5,
        ease: "power3.out",
      });

      // BACKGROUND IMAGES
      bgRefs.current.forEach((el, index) => {
        if (!el) return;

        // BGImg follows hero direction
        if (el.classList.contains("BGImg")) {
          gsap.to(el, {
            rotateY: rotateY * 0.6,
            x: moveX * 0.6,
            duration: 0.6,
            ease: "power3.out",
          });
        }
        // Other elements = VERY subtle
        else {
          gsap.to(el, {
            x: moveX * 0.15,
            rotateY: rotateY * 0.15,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });
    };

    const reset = () => {
      gsap.to([hero, ...bgRefs.current], {
        x: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);
  return (
    <section>
      <div className="bgdiv col-11 col-lg-11 mt-5" ref={containerRef}>
        <img src="./img/JobRoles.svg" alt="Job Roles" className="JRImg"
          ref={(el) => (bgRefs.current[0] = el)} />

        <img src="./img/Other.png" alt="Other img" className="Other d-block"
          ref={(el) => (bgRefs.current[1] = el)} />

        <img src="./img/Slogun.png" alt="Slogun img" className="Slogunimg"
          ref={(el) => (bgRefs.current[2] = el)} />

        <img src="./img/CREATIVE.png" alt="background img" className="BGImg"
          ref={(el) => (bgRefs.current[3] = el)} />

        <img src="./img/HEROimg.png" alt="Landing img" className="HEROImg"
          ref={heroRef} />

        <img src="./img/reactdev.png" alt="" className="reactdev"
          ref={(el) => (bgRefs.current[4] = el)} />

        <a href="https://github.com/moreygaurav?tab=">
          <img src="./img/github.png" alt="Github" className="githubimg"
            ref={(el) => (bgRefs.current[5] = el)} />
        </a>

        <a href="https://www.linkedin.com/in/gaurav-morey-272315243/">
          <img src="./img/linkdin.png" alt="LinkedIn" className="linkdimg"
            ref={(el) => (bgRefs.current[6] = el)} />
        </a>

        <a href="https://www.facebook.com/gsuravpradeemorey.morey/">
          <img src="./img/facebook.png" alt="Facebook" className="facebookimg"
            ref={(el) => (bgRefs.current[7] = el)} />
        </a>

        <a href="https://www.instagram.com/ign_gaurav/">
          <img src="./img/instagram.png" alt="Instagram" className="instagramimg"
            ref={(el) => (bgRefs.current[8] = el)} />
        </a>

        <a href="mailto:gauravmorey27@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="./img/gmailphoto.png" alt="Gmail" className="gmailimg"
            ref={(el) => (bgRefs.current[9] = el)} />
        </a>

        <img src="./img/Description.PNG" alt="Description" className="Description"
          ref={(el) => (bgRefs.current[10] = el)} />
      </div>
    </section>
  );
}