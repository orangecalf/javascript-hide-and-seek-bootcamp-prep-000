function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
 return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n) {
 var main = document.getElementsByClassName("ranked-list").querySelectorAll("li)")
 for (var i = 0; i < main.length; i++) {
 main[i].innerHTML = parseInt(main[i].innerHTML =+ n)
 }
}