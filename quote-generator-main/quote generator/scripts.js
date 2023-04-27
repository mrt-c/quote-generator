let quote = document.querySelector("#quote");
let quotesM = [
  {
    text: "Жизнь прекрасна, если есть, что ее прекрасным сделать.",
    author: "Робин Уильямс",
  },
  {
    text: "Успех - это не конечная точка, успех - это путь.",
    author: "Уилл Смит",
  },
  {
    text: "Ты можешь стать героем своей истории.",
    author: "Конор МакГрегор",
  },
];
function getRandomInt() {
  return Math.floor(Math.random() * quotesM.length);
}
quote.innerHTML = quotesM[getRandomInt(quotesM.length)].text;
document.querySelector("#next-btn").addEventListener("click", function (event) {
  let a = getRandomInt(quotesM.length);
  quote.innerHTML = quotesM[a].text + " " + quotesM[a].author;
});
document.querySelector("#addBtn").addEventListener("click", function (event) {
  debugger;
  console.log();
  quotesM.push({
    text: document.querySelector("#text-input").value,
    author: document.querySelector("#author-input").value,
  });
  document.querySelector("#text-input").value = "";
  document.querySelector("#author-input").value = "";
  console.log(quotesM);
  event.preventDefault();
});
