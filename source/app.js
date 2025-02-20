
function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem-text", {
      strings: " When she first saw them, they were dazzling…",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    
}
let poemForm = document.querySelector("#textForm");
poemForm.addEventListener("submit", generatePoem);