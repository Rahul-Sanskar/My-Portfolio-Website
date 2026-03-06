import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experiences
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
            Delivered 35+ production features across AI/ML, backend, and frontend 
            systems, including building an AI-driven Forex Rate Prediction System for 
            real-time market analysis. Developed scalable microservice APIs using 
            Spring Boot and improved platform reliability and API performance through 
            optimized architecture.
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
            I have worked on multiple AI and full-stack systems including MACER 
            (vehicular cloud computing), FHE inference acceleration, AI anomaly 
            detection pipelines, Bihar Medical Colleges ICT dashboard, and research
             models such as OptimaNet (CNN-ViT myeloma detection), YOLO ensembles, 
             Hybrid PPO cloud scheduling, MAGADH classification, DeepSoilNet, and 
             IoT-based smart irrigation.
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
            Built Mediport, a hospital report generation system used by 20+ staff 
            members in the department, integrated secure Ayushman Bharat data 
            synchronization, and reduced report processing time by 40% through 
            automated backend data pipelines and workflow optimization.
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
           Increased user engagement by 35% and reduced database retrieval time by
            40% through optimized queries. Developed a RAG-based document reader 
            with an LLM-powered question–answer chatbot that responds using 
            uploaded documents. Collaborated with cross-functional teams to support
             AI-driven product development across multiple projects and improve 
             overall system usability and performance.
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
            and optimized workflows to reduce data processing time. Also authored the 
            article “Redefining Shopping in the Digital Age,” which was featured on 
            the company’s website at the front page.
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
            Produced 50+ SEO-optimized articles for digital campaigns, increasing 
            readership and website traffic through structured, research-driven writing. 
            Created engaging educational and marketing content tailored for diverse 
            audiences, helping strengthen the platform’s online presence and improve 
            content visibility through effective keyword optimization and audience-focused 
            storytelling.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;