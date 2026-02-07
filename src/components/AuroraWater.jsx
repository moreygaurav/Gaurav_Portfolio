import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AuroraWater() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    let intensity = { value: 0 };

    const colors = [
      [255, 110, 196],
      [120, 115, 245],
      [79, 172, 254],
      [67, 233, 123],
    ];

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (intensity.value > 0.01) {
        for (let i = 0; i < 4; i++) {
          const [r, g, b] = colors[i];
          const wave = Math.sin(time * 0.002 + i) * 80 * intensity.value;

          const x = mouse.current.x + wave;
          const y = mouse.current.y + Math.cos(time * 0.002 + i) * 80;

          const gradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            300 * intensity.value,
          );

          gradient.addColorStop(
            0,
            `rgba(${r},${g},${b},${0.25 * intensity.value})`,
          );
          gradient.addColorStop(1, "transparent");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, 300 * intensity.value, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time++;
      requestAnimationFrame(draw);
    };

    draw();

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;

      gsap.to(intensity, {
        value: 1,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onStop = () => {
      mouse.current.active = false;
      gsap.to(intensity, {
        value: 0,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onStop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onStop);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
