export function splitText(element: HTMLElement, type: "chars" | "words" | "lines") {
  if (!element) return;

  let text = element.innerText;
  element.innerHTML = ""; // Clear original text

  if (type === "chars") {
      text.split("").forEach(char => {
          let span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          element.appendChild(span);
      });
  } else if (type === "words") {
      text.split(" ").forEach(word => {
          let span = document.createElement("span");
          span.textContent = word + " ";
          span.style.display = "inline-block";
          element.appendChild(span);
      });
  } else if (type === "lines") {
      let lines = text.split("\n");
      lines.forEach(line => {
          let div = document.createElement("div");
          div.textContent = line;
          div.style.display = "block";
          element.appendChild(div);
      });
  }
}
