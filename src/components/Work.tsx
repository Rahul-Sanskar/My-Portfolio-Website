import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX + window.innerHeight}`,
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
        anticipatePin: 1,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  const projects = [
    {
      title: "Emotunes",
      description: "Real-Time Emotion Detection based Music Recommendation",
      tools: "Python, TensorFlow, Keras, OpenCV, NumPy, Pandas, Matplotlib, Spotify API, Django, MySQL",
      image: "/images/emotunes.webp",
    },
    {
      title: "Deepfake Detection System",
      description: "Advanced AI system for detecting deepfake videos",
      tools: "Python, TensorFlow, PyTorch, OpenCV, CNN, RNN, Capsule Networks, Flask, Docker",
      image: "/images/pratyakshai.webp",
    },
    {
      title: "Mediport",
      description: "Personalized report generation tool for hospitals",
      tools: "Python, Django, MySQL, Pandas, Matplotlib, Seaborn, Docker",
      image: "/images/mediport.webp",
    },
    {
      title: "Pragatipath",
      description: "Education platform for skill development and progress tracking",
      tools: "React, Django, MySQL, Vercel, Netlify, Python",
      image: "/images/pragatipath.webp",
    },
    {
      title: "AI Chatbot",
      description: "Conversational AI chatbot for customer support",
      tools: "Python, NLTK, TensorFlow, Flask, Dialogflow, MongoDB",
      image: "/images/5.png",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Dashboard for managing e-commerce analytics and sales",
      tools: "React, Node.js, Express, MongoDB, Chart.js, Tailwind CSS",
      image: "/images/6.png",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
