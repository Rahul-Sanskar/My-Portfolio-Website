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
                <h4>Content Strategy, AI, Database & Cloud Intern</h4>
                <h5>CuminAI</h5>
              </div>
              <h3>Jul 2024- Feb 2025</h3>
            </div>
            <p>
            Increased user engagement by 35%, optimized database queries to reduce retrieval time by 40%, 
            and led cross-functional collaboration to deliver scalable AI solutions for 10+ projects.
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
            deployed 3 AI models through in-depth AI/ML research, 
            and streamlined workflows to reduce data processing time by 50%.
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
            Produced 50+ high-quality articles for marketing campaigns, 
            increasing readership by 20% and boosting website traffic by 15% with SEO-optimized content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
