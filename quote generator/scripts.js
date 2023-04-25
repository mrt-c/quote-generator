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
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
quote.innerHTML = quotegetRandomInt(quoteM.length);
