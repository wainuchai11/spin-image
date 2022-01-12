setInterval(work, 100);

function work() {
  var range = document.getElementById("range").value;
  var maini = document.getElementById("main");
  console.log(range);
  maini.innerHTML = `<img src="/images/iPhone${range}.jpg" alt="" />`;
}
