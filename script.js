function changeH1() {
  document.getElementById("title").innerHTML = "Welcome to our Shop!";
  // document.getElementsByTagName("h1")[0].innerHTML = "Welcome to our Shop!";
}

function changeBackground() {
  document.body.style.backgroundColor = "lightgrey";
}

function changeFooter() {
  document.getElementById("footer").innerHTML = "any adress - baker street 221";
}

function addClass() {
  let list = document.querySelectorAll("p");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("newClass");
  }
  // document.querySelector("p").classList.add("newClass"); // olny works for de first p tag
}

function toggleStyle() {
  let image = document.querySelectorAll("img");
  for (let i = 0; i < image.length; i++) {
    const element = image[i];
    element.classList.toggle("hidden");
  }
}

function colorPrices() {
  let color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();

  console.log(color);
  let prices = document.querySelectorAll("h4");
  for (let i = 0; i < prices.length; i++) {
    const element = prices[i];
    element.style.color = color;
  }
}
