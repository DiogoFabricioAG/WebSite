

import { useRef, useEffect } from "react";


const icons = [
    "astro.svg",
    "react_light.svg",
    "typescript.svg",
    "github.svg",
    "docker.svg",
    "csharp.svg"
];

const SliderIcon = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    let pos = 0;
    const speed = 0.7;

    useEffect(() => {
        
        const slider = sliderRef.current;
        if (!slider) return;

        let pos = 0;
        const speed = 0.7;
        let running = true;

        function animate() {
            if (!running) return;
            pos -= speed;
            const totalWidth = slider.scrollWidth / 2;
            if (-pos >= totalWidth) {
                pos = 0;
            }
            slider.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);

        // Ejemplo de uso de ScrollTrigger (puedes ajustar según tu necesidad)
        gsap.to(slider, {
            x: 0,
            scrollTrigger: {
                trigger: slider,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
        

        return () => { running = false; };
    }, []);

    return (
        <div className="w-full flex justify-center mt-8">
            <div className="overflow-hidden w-[350px] h-16 relative">
                <div
                    ref={sliderRef}
                    className="flex items-center gap-6 h-16"
                    style={{ willChange: "transform" }}
                >
                    {icons.concat(icons).map((icon, i) => (
                        <img
                            key={i}
                            src={`/icons/${icon}`}
                            alt={icon}
                            className="h-12 w-12 object-contain"
                            loading="lazy"
                            style={{ userSelect: "none" }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderIcon;
