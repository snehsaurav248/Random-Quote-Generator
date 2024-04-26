const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "The journey of a thousand miles begins with one step. - Lao Tzu"
  ];
  
  const colors = [
    "#FF5370", "#FF869A", "#FFCDD2", "#FFEBEE", "#FF5370",
    "#FFE87D", "#FFD95B", "#FFF2CF", "#FFEB3B", "#FFD700"
  ];
  
  function generateGreeting() {
    const timeOfDay = getTimeOfDay();
    const title = document.getElementById('title');
    title.textContent = `Let's start our ${timeOfDay} with a new quote`;
  }
  
  function getTimeOfDay() {
    const currentHour = new Date().getHours();
    let timeOfDay;
  
    if (currentHour >= 6 && currentHour < 12) {
      timeOfDay = "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening/night";
    }
  
    return timeOfDay;
  }
  
  function generateQuote() {
    const quoteText = document.getElementById('quoteText');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    quoteText.textContent = randomQuote;
  
    
    const isDarkBackground = isColorDark(randomColor);
  
    
    if (isDarkBackground) {
      quoteText.style.color = "#FFF"; 
    } else {
      quoteText.style.color = "#000"; 
    }
  
    document.body.style.backgroundColor = randomColor;
    document.getElementById('newQuoteButton').style.backgroundColor = randomColor;
  }
  
  function isColorDark(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
  
    const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  
    return brightness <= 127;
}

generateGreeting();
generateQuote();
