import gsap from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css"; // Required for animations

export function initialFX() {
  document.body.style.overflowY = "auto";
  Splitting(); // Automatically split text elements

  // Select elements with class "split-text" and apply Splitting.js
  const splitElements = document.querySelectorAll(".split-text");
  splitElements.forEach((el) => {
    Splitting({ target: el, by: "chars" });
  });

  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Select split characters
  let landingTextChars = document.querySelectorAll(
    ".landing-info h3 .char, .landing-intro h2 .char, .landing-intro h1 .char"
  );

  gsap.fromTo(
    landingTextChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let landingH2Chars = document.querySelectorAll(".landing-h2-info .char");
  gsap.fromTo(
    landingH2Chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  let landingText3Chars = document.querySelectorAll(".landing-h2-info-1 .char");
  let landingText4Chars = document.querySelectorAll(".landing-h2-1 .char");
  let landingText5Chars = document.querySelectorAll(".landing-h2-2 .char");

  LoopText(landingH2Chars, landingText3Chars);
  LoopText(landingText4Chars, landingText5Chars);
}

// Updated LoopText function
function LoopText(Text1: NodeListOf<Element>, Text2: NodeListOf<Element>) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
