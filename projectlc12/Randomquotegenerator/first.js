
// by using array to store quotes and we will generate that one

const quotes = [
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Dream big and work hard.",
  "Consistency beats motivation.",
  "Your attitude determines your direction.",
  "Success comes from discipline.",
  "Small steps create big results.",
  "Never stop learning.",
  "Do it with passion or not at all.",
  "Hard work beats talent.",
  "Focus on progress, not perfection.",
  "Failure is part of growth.",
  "Make today count.",
  "Learn from yesterday.",
  "Keep moving forward.",
  "Great things take time.",
  "Discipline creates freedom.",
  "Success starts with self-belief.",
  "Don't wait for opportunity. Create it.",
  "Every day is a fresh start.",
  "Action is the key to success.",
  "The best time to start is now.",
  "Push yourself beyond your limits.",
  "Nothing changes if nothing changes.",
  "Stay patient and trust the process.",
  "Mistakes are proof you're trying.",
  "Dream it. Believe it. Achieve it.",
  "Your future is created today.",
  "Stay positive and work hard.",
  "Progress is better than excuses.",
  "Confidence comes from preparation.",
  "Turn obstacles into opportunities.",
  "Be stronger than your excuses.",
  "Winners never quit.",
  "Never settle for less.",
  "Keep your goals in sight.",
  "One step at a time.",
  "The journey is worth it.",
  "Success is earned, not given.",
  "Don't fear failure, fear regret.",
  "Work silently, let success make the noise.",
  "Believe you can and you're halfway there.",
  "Success is a journey, not a destination.",
  "Stay focused on your purpose.",
  "Keep chasing your dreams.",
  "Every expert was once a beginner.",
  "Don't stop until you're proud.",
  "The harder you work, the luckier you get.",
  "Success begins outside your comfort zone.",
  "Be the reason someone smiles today."
];


//accessing element of html one
const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener('click',()=>{
    // selection quotes form the array quotes
    const index = Math.floor(Math.random()*50); //to generate random number

    h2.textContent = quotes[index];
})