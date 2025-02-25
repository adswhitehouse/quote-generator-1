let quotes = [
  {
    quote: "Waste no more time arguing what a good man should be. Be One.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    author: "Marcus Aurelius",
  },
  {
    quote:
      "We are more often frightened than hurt; and we suffer more in imagination than in reality.",
    author: "Seneca",
  },
  {
    quote: "If a man knows not which port he sails, no wind is favorable.",
    author: "Seneca",
  },
  {
    quote:
      "How long are you going to wait before you demand the best for yourself?",
    author: "Epictetus",
  },
  {
    quote:
      "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus",
  },
  {
    quote:
      "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.",
    author: "Cato",
  },
  {
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
    author: "Viktor Frankl",
  },
  {
    quote: "The goal of life is living in agreement with nature.",
    author: "Zeno of Citium",
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
];

// Variables
let newQuote = document.querySelector(".jsNewQuote");
let tweet = document.querySelector(".jsTweet");
let quoteText = document.querySelector(".jsQuoteText");
let quoteAuthor = document.querySelector(".jsQuoteAuthor");

// Declare quoteIndex as 0 initially
let quoteIndex = 0;

// Display quote with data from quotes index matching quoteIndex and increment quoteIndex
function getQuote() {
  quoteText.textContent = quotes[quoteIndex].quote;
  quoteAuthor.textContent = quotes[quoteIndex].author;
  quoteIndex++;
}

// Run getQuote initially to display first quote
getQuote();

// Change to next quote on newQuote click unless the last quote is displaying, then cycle back to beginning quote
newQuote.addEventListener("click", () => {
  if (quoteIndex < quotes.length) {
    getQuote();
  } else {
    quoteIndex = 0;
    getQuote();
  }
});
