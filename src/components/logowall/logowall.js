import { useState } from "react";
import "./LogoWall.css";

function LogoWall({
                    items = [],
                    direction = "horizontal",
                    pauseOnHover = false,
                    size = "clamp(8rem, 1rem + 30vmin, 25rem)",
                    duration = "60s",
                    textColor = "#ffffff",
                    bgColor = "#060606",
                    bgAccentColor = "#111111"
                  }) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "logoWall-wrapper",
    direction === "vertical" && "wrapper--vertical"
  ]
      .filter(Boolean)
      .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused"
  ]
      .filter(Boolean)
      .join(" ");

  return (
      <article
          className={wrapperClass}
          style={{
            "--size": size,
            "--duration": duration,
            "--color-text": textColor,
            "--color-bg": bgColor,
            "--color-bg-accent": bgAccentColor
          }}
      >
        <div
            className={marqueeClass}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <div className="marquee__group">
            {items.map((item, idx) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx}>
                  <img src={item.imgUrl} alt={item.altText} />
                </a>
            ))}
          </div>
          <div className="marquee__group" aria-hidden="true">
            {items.map((item, idx) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={`dup1-${idx}`}>
                  <img src={item.imgUrl} alt={item.altText} />
                </a>
            ))}
          </div>
        </div>
      </article>
  );
}

export default LogoWall;