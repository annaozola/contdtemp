import React from 'react'
import './App.css'
import Marquee from 'react-fast-marquee'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>CONTD Studio</h1>
        </div>
        <div className="footer">
          <Marquee
            className="marquee"
            play={true}
            pauseOnHover={true}
            direction={"rigt"}
            speed={24}
            loop={0}
            gradient={false}
          >
            <p>This domain is reserved for a project that is still a work in progress. Approximate launch date - early 2025 or 2026.</p>
            <p>This domain is reserved for a project that is still a work in progress. Approximate launch date - early 2025 or 2026.</p>
            <p>This domain is reserved for a project that is still a work in progress. Approximate launch date - early 2025 or 2026.</p>
            <p>This domain is reserved for a project that is still a work in progress. Approximate launch date - early 2025 or 2026.</p>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default App
