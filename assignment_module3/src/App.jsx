
function App() {
  return (
      <div className="dark">
        {/* Header */}
        <header className="header">
          <div className="logo">EduConsult</div>
          <nav className="nav">
            <a href="#dream" className="nav-link">
              Dream Study
            </a>
            <a href="#solution" className="nav-link">
              Solutions
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </header>

        {/* Dream Study International */}
        <section id="dream" className="section">
          <h2 className="section-title">Dream Study International</h2>
          <p className="section-text">
            Your trusted partner in achieving academic dreams across the globe.
          </p>
        </section>

        {/* One Stop Solution */}
        <section id="solution" className="section">
          <h2 className="section-title">We Offer One Stop Solution</h2>
          <p className="section-text">
            From university applications to visa processing, we've got you
            covered end-to-end.
          </p>
        </section>

        {/* Dark Mode Sample */}
        <section className="section">
          <div className="dark-box">This is a simple dark mode box.</div>
        </section>

        {/* Footer */}
        <footer className="footer">
          &copy; 2025 Dream Study International. All rights reserved.
        </footer>
      </div>
  );
}

export default App;
