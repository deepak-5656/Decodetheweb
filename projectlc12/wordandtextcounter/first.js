

const text = document.getElementById('comment');
const textcount = document.querySelector('h2');
const wordcount = document.querySelector('h3');

text.addEventListener('input',()=>{
    const t = text.value;
    const tt = t.trim();
    const arr = tt.split(" ");
    textcount.textContent = `Textcount is ${tt.length}`;
    wordcount.textContent = `Wordcount is ${arr.length}`;
})