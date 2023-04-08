const counter = document.querySelector("#replace");

async function updateCounter() {
  let response = await fetch("https://wzxvusuwpyyhcr6xakro2chuim0xyome.lambda-url.us-east-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = `Visitors : ${data}`;
}
updateCounter();