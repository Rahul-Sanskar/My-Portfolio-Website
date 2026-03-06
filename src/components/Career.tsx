import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer with AI</h4>
                <h5>Monetize360</h5>
              </div>
              <h3>Aug 2025 - Present</h3>
            </div>
            <p>
            Delivered 35+ production features across backend and frontend systems, 
            built microservice APIs using Spring Boot, and improved platform reliability 
            and API performance through optimized architecture and scalable implementations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer (Contract)</h4>
                <h5>Thesisly.in</h5>
              </div>
              <h3>Jun 2025 - Present</h3>
            </div>
            <p>
            Developed multiple AI systems including anomaly detection and predictive analytics pipelines, 
            built AI-powered dashboards for institutional data insights, and improved encrypted model 
            inference performance through noise-aware FHE-based optimization.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer (Client Project)</h4>
                <h5>Vagus Hospital</h5>
              </div>
              <h3>Jul 2024 - Apr 2025</h3>
            </div>
            <p>
            Built Mediport, a hospital report generation system used by medical staff, 
            integrated secure Ayushman Bharat data synchronization, and reduced report 
            processing time by 40% through automated backend pipelines.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Strategy, AI, Database & Cloud Intern</h4>
                <h5>CuminAI</h5>
              </div>
              <h3>Jul 2024 - Feb 2025</h3>
            </div>
            <p>
            Increased user engagement by 35%, optimized database queries reducing 
            retrieval time by 40%, and supported AI-driven product development 
            through cross-functional collaboration across multiple projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI, Backend and Research Intern</h4>
                <h5>Presear Software Pvt Ltd</h5>
              </div>
              <h3>May 2023 - Oct 2023</h3>
            </div>
            <p>
            Developed backend algorithms improving system performance by 30%, 
            implemented multiple AI models through applied machine learning research, 
            and optimized workflows to significantly reduce data processing time.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Content Writing Intern</h4>
                <h5>MaxEd</h5>
              </div>
              <h3>Jan 2023 - Mar 2023</h3>
            </div>
            <p>
            Produced 50+ SEO-optimized articles for digital campaigns, 
            increasing readership and website traffic through structured, 
            research-driven content and audience-focused writing.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;