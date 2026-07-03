import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <Marquee
      className="marquee"
      play={true}
      pauseOnHover={true}
      direction={"right"}
      speed={24}
      loop={0}
      gradient={false}
    >
      <p>
        This domain is reserved for a project that is still a work in progress.
        Approximate launch date - early 2025 or 2026.
      </p>
      <p>
        This domain is reserved for a project that is still a work in progress.
        Approximate launch date - early 2025 or 2026.
      </p>
      <p>
        This domain is reserved for a project that is still a work in progress.
        Approximate launch date - early 2025 or 2026.
      </p>
      <p>
        This domain is reserved for a project that is still a work in progress.
        Approximate launch date - early 2025 or 2026.
      </p>
    </Marquee>
  );
};

export default MarqueeComponent;
