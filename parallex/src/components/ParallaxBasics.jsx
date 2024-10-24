import React from 'react';
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const ParallaxBasics = () => {
  return (
    <div>
      <ParallaxProvider>
      <div style={styles.page}>
        {/* Section 1 */}
        <section style={{ ...styles.section, backgroundColor: "#1abc9c" }}>
          <h1>Welcome to Parallax Page</h1>
        </section>

        {/* Parallax Section */}
        <Parallax speed={-20}>
          <div style={styles.parallaxBox}>
            <h2>Scroll Down for More Effects</h2>
          </div>
        </Parallax>

        {/* Section 2 */}
        <section style={{ ...styles.section, backgroundColor: "#3498db" }}>
          <h1>This is a normal section</h1>
        </section>

        {/* Parallax Section 2 */}
        <Parallax speed={-5}>
          <div style={styles.parallaxBox}>
            <h2>Another Parallax Element</h2>
          </div>
        </Parallax>

        {/* Section 3 */}
        <section style={{ ...styles.section, backgroundColor: "#9b59b6" }}>
          <h1>End of Page</h1>
        </section>
      </div>
    </ParallaxProvider>
    </div>
  )
}


const styles = {
    page: {
      textAlign: "center",
    },
    section: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "2rem",
    },
    parallaxBox: {
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      color: "#fff",
      backgroundColor: "#2c3e50",
      margin: "50px 0",
    },
  };

export default ParallaxBasics
