function generateRandom() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert("Please enter valid minimum and maximum values (min < max)");
    return;
  }

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").textContent = "Random Number: " + randomNum;
}