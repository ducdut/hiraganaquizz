
const questions = [
  { character: 'あ', romaji: 'a' },
  { character: 'い', romaji: 'i' },
  { character: 'う', romaji: 'u' },
  { character: 'え', romaji: 'e' },
  { character: 'お', romaji: 'o' },
];

let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("character").textContent = q.character;

  const choices = ['a', 'i', 'u', 'e', 'o'].sort(() => 0.5 - Math.random());
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = '';
  choices.forEach(c => {
    const btn = document.createElement("div");
    btn.textContent = c;
    btn.className = "choice";
    btn.onclick = () => checkAnswer(c);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = '';
}

function checkAnswer(answer) {
  const correct = questions[current].romaji;
  if (answer === correct) {
    document.getElementById("result").textContent = "✅ Chính xác!";
  } else {
    document.getElementById("result").textContent = `❌ Sai rồi. Đáp án đúng: ${correct}`;
  }
}

function nextQuestion() {
  current = (current + 1) % questions.length;
  showQuestion();
}

window.onload = showQuestion;
