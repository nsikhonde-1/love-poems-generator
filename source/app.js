
function showPoem(response) {
   new Typewriter("#poem-text", {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
     cursor: "",
   });
    
}
  
function generatePoem(event) {
  event.preventDefault();
  
  let poemInfo = document.querySelector(".text-form");
  let apiKey = "713a631324o2dtc013aaf4374b846544";
  let prompt = `Generate love poems about ${poemInfo.value}`;
  let context = "You are a love expect who loves poems. You are to generate a 6 line love poems in basic HTML and separate lines in <br>. Do not include a title to the poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
   
}
let poemForm = document.querySelector("#textForm");
poemForm.addEventListener("submit", generatePoem);