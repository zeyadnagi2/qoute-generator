const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
];

let lastQuoteIndex = -1; 

document.getElementById("new-quote-btn").addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);

  lastQuoteIndex = randomIndex; 

  document.getElementById("quote-display").textContent = quotes[randomIndex];
});
